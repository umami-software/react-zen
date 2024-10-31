import classNames from 'classnames';
import { CSSProperties, HTMLAttributes, ReactNode } from 'react';
import { Slot } from './Slot';
import styles from './Icon.module.css';

export interface IconProps {
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  variant?: 'input';
  rotate?: number;
  style?: CSSProperties;
  className?: string;
  children: ReactNode;
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
