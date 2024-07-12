import classNames from 'classnames';
import { CSSProperties, HTMLAttributes, ReactNode } from 'react';
import { Slot } from '@radix-ui/react-slot';
import styles from './Icon.module.css';

export interface IconProps {
  size?: 1 | 2 | 3 | 4 | 5 | 6;
  variant?: 'input';
  rotate?: number;
  style?: CSSProperties;
  className?: string;
  children: ReactNode;
}

export function Icon({
  size = 3,
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
      className={classNames(styles.icon, className, { [styles[`size${size}`]]: size })}
      style={{ ...style, transform: rotate ? `rotate(${rotate}deg)` : undefined }}
    >
      {children}
    </Slot>
  );
}

export default Icon;
