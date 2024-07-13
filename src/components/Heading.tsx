import { HTMLAttributes, ReactNode } from 'react';
import classNames from 'classnames';
import { Slot } from '@radix-ui/react-slot';
import styles from './Heading.module.css';

export function Heading({
  size,
  children,
  asChild,
  ...attributes
}: {
  size?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;
  asChild?: boolean;
  children: ReactNode;
} & HTMLAttributes<HTMLHeadingElement>) {
  const Component = asChild ? Slot : 'h1';

  return (
    <Component
      {...attributes}
      className={classNames(styles.heading, { [styles[`size${size}`]]: size })}
    >
      {children}
    </Component>
  );
}

export default Heading;
