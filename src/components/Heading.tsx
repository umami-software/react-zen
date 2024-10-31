import { HTMLAttributes, ReactNode } from 'react';
import classNames from 'classnames';
import { Slot } from './Slot';
import styles from './Heading.module.css';

interface HeadingProps extends HTMLAttributes<HTMLElement> {
  size?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;
  asChild?: boolean;
  children: ReactNode;
}

function Heading({ size = 5, className, children, asChild, ...props }: HeadingProps) {
  const Component = asChild ? Slot : 'div';

  return (
    <Component
      {...props}
      className={classNames(styles.heading, className, size && styles[`size${size}`])}
    >
      {children}
    </Component>
  );
}

export { Heading };
export type { HeadingProps };
