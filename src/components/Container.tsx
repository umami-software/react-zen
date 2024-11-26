import classNames from 'classnames';
import { Box, BoxProps } from './Box';
import styles from './Container.module.css';

export interface ContainerProps extends BoxProps {
  isFluid?: boolean;
  isCentered?: boolean;
}

export function Container({
  isCentered = true,
  isFluid,
  className,
  children,
  ...props
}: ContainerProps) {
  return (
    <Box
      {...props}
      className={classNames(
        styles.container,
        className,
        isCentered && styles.centered,
        isFluid && styles.fluid,
      )}
    >
      {children}
    </Box>
  );
}
