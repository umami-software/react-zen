import classNames from 'classnames';
import { HTMLAttributes, ReactNode } from 'react';
import { Slot } from '@radix-ui/react-slot';
import styles from './Icon.module.css';

export interface IconProps {
  size?: 1 | 2 | 3 | 4 | 5 | 6;
  variant?: 'input';
  rotate?: number;
  children: ReactNode;
}

export function Icon({
  size = 3,
  variant,
  rotate,
  style,
  children,
  ...attributes
}: IconProps & HTMLAttributes<HTMLElement>) {
  return (
    <Slot
      {...attributes}
      className={classNames(styles.icon, { [styles[`size${size}`]]: size })}
      style={{ ...style, transform: rotate ? `rotate(${rotate}deg)` : undefined }}
    >
      {children}
    </Slot>
  );
}

export default Icon;
