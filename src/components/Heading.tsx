import classNames from 'classnames';
import type { Responsive, FontSize, FontWeight, LetterSpacing, TextAlign } from '@/lib/types';
import { useDesignProps } from './hooks/useDesignProps';
import { Box, BoxProps } from './Box';

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
  style,
  children,
  ...props
}: HeadingProps) {
  const [classes, styleProps] = useDesignProps({
    headingSize: size,
    textAlign: align,
    fontWeight: weight,
    letterSpacing: spacing,
  });

  return (
    <Box
      {...props}
      className={classNames(
        'text-[--heading-color] [font-weight:--font-weight-bold] leading-[1.2]',
        className,
        classes,
      )}
      style={{ ...styleProps, ...style }}
    >
      <div className="text-red-500 font-bold">Test Tailwind</div>
      {children}
    </Box>
  );
}

export { Heading };
export type { HeadingProps };
