import type { FontWeight, HeadingSize, LetterSpacing, Responsive, TextAlign } from '@/lib/types';
import { Box, type BoxProps } from './Box';
import { cn, mapFontWeight, mapHeadingSize, mapLetterSpacing, mapTextAlign } from './lib/tailwind';

interface HeadingProps extends BoxProps {
  size?: Responsive<HeadingSize>;
  weight?: Responsive<FontWeight>;
  spacing?: Responsive<LetterSpacing>;
  align?: Responsive<TextAlign>;
}

function Heading({
  size = '2xl',
  weight,
  align,
  spacing = 'tight',
  className,
  children,
  ...props
}: HeadingProps) {
  const classes = cn(
    'font-semibold text-foreground-primary',
    mapHeadingSize(size),
    mapTextAlign(align),
    mapFontWeight(weight),
    mapLetterSpacing(spacing),
    className,
  );

  return (
    <Box {...props} className={classes}>
      {children}
    </Box>
  );
}

export { Heading };
export type { HeadingProps };
