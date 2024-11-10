import { HTMLAttributes } from 'react';
import classNames from 'classnames';
import styles from './Container.module.css';

export interface ContainerProps extends HTMLAttributes<HTMLElement> {
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
    <div
      {...props}
      className={classNames(
        styles.container,
        className,
        isCentered && styles.centered,
        isFluid && styles.fluid,
      )}
    >
      {children}
    </div>
  );
}
