import classNames from 'classnames';
import type { Responsive, FontSize, FontWeight } from '@/lib/types';
import { Box, BoxProps } from './Box';
import globalStyles from './global.module.css';
import styles from './Heading.module.css';

interface HeadingProps extends BoxProps {
  size?: Responsive<FontSize>;
  weight?: Responsive<FontWeight>;
}

function Heading({ size = '5', className, children, ...props }: HeadingProps) {
  return (
    <Box
      {...props}
      className={classNames(styles.heading, className, size && globalStyles[`font-size-${size}`])}
    >
      {children}
    </Box>
  );
}

export { Heading };
export type { HeadingProps };
