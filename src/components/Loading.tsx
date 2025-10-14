import classNames from 'classnames';
import { Box, type BoxProps } from './Box';
import { Dots } from './Dots';
import { Spinner } from './Spinner';
import styles from './Loading.module.css';

export interface LoadingProps extends BoxProps {
  size?: 'sm' | 'md' | 'lg';
  icon?: 'dots' | 'spinner';
  placement?: 'absolute' | 'center' | 'inline';
  className?: string;
}

export function Loading({
  size,
  placement = 'inline',
  icon = 'spinner',
  className,
  ...props
}: LoadingProps) {
  return (
    <Box {...props} className={classNames(styles.loading, className, styles[placement])}>
      {icon === 'dots' && <Dots size={size} />}
      {icon === 'spinner' && <Spinner size={size} />}
    </Box>
  );
}
