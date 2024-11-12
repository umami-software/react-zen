import { HTMLAttributes } from 'react';
import classNames from 'classnames';
import { Slot } from './Slot';
import styles from './Icon.module.css';

export interface IconProps extends HTMLAttributes<HTMLElement> {
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  variant?: 'input';
  rotate?: number;
}

export function Icon({
  size = 'sm',
  variant,
  rotate,
  style,
  className,
  children,
  ...props
}: IconProps & HTMLAttributes<HTMLElement>) {
  return (
    <Slot
      {...props}
      className={classNames(styles.icon, className, size && styles[size])}
      style={{ ...style, transform: rotate ? `rotate(${rotate}deg)` : undefined }}
    >
      {children}
    </Slot>
  );
}
