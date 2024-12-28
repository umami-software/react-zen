import classNames from 'classnames';
import type { Responsive, FontSize, FontWeight, LetterSpacing } from '@/lib/types';
import { useDesignProps } from './hooks/useDesignProps';
import { Box, BoxProps } from './Box';
import styles from './Heading.module.css';

interface HeadingProps extends BoxProps {
  size?: Responsive<FontSize>;
  weight?: Responsive<FontWeight>;
  spacing?: Responsive<LetterSpacing>;
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
      className={classNames(styles.heading, className, classes)}
      style={{ ...styleProps, ...style }}
    >
      {children}
    </Box>
  );
}

export { Heading };
export type { HeadingProps };
