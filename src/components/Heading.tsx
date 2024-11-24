import classNames from 'classnames';
import type { Responsive, FontSize, FontWeight } from '@/lib/types';
import { mapProps } from '@/lib/utils';
import { Box, BoxProps } from './Box';
import styles from './Heading.module.css';

interface HeadingProps extends BoxProps {
  size?: Responsive<FontSize>;
  weight?: Responsive<FontWeight>;
}

function Heading({
  size = '5',
  weight,
  align,
  className,
  style,
  children,
  ...props
}: HeadingProps) {
  const [classes, styleProps] = mapProps({ fontSize: size, textAlign: align, fontWeight: weight });

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
