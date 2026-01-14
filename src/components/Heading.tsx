import type { Responsive, FontSize, FontWeight, LetterSpacing, TextAlign } from '@/lib/types';
import { Box, BoxProps } from './Box';
import {
  cn,
  mapHeadingSize,
  mapTextAlign,
  mapFontWeight,
  mapLetterSpacing,
} from './lib/tailwind';

interface HeadingProps extends BoxProps {
  size?: Responsive<FontSize>;
  weight?: Responsive<FontWeight>;
  spacing?: Responsive<LetterSpacing>;
  align?: Responsive<TextAlign>;
}

function Heading({
  size = '3',
  weight,
  align,
  spacing = '1',
  className,
  children,
  ...props
}: HeadingProps) {
  const classes = cn(
    'font-semibold text-gray-900 dark:text-gray-100',
    mapHeadingSize(size),
    mapTextAlign(align),
    mapFontWeight(weight),
    mapLetterSpacing(spacing),
    className
  );

  return (
    <Box {...props} className={classes}>
      {children}
    </Box>
  );
}

export { Heading };
export type { HeadingProps };
