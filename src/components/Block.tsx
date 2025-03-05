import { HTMLAttributes } from 'react';
import classNames from 'classnames';
import styles from './Block.module.css';
import { Slot } from '@/components/Slot';

export interface BlockProps extends HTMLAttributes<HTMLDivElement> {
  asChild?: boolean;
}

export function Block({ asChild, className, children, ...props }: BlockProps) {
  const Component = asChild ? Slot : 'div';

  return (
    <Component {...props} className={classNames(styles.block, className)}>
      {children}
    </Component>
  );
}
