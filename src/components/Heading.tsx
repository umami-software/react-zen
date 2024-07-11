import { HTMLAttributes, ReactNode } from 'react';
import classNames from 'classnames';
import styles from './Heading.module.css';

export function Heading({
  size,
  children,
  ...attributes
}: {
  size?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;
  children: ReactNode;
} & HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h1 {...attributes} className={classNames(styles.heading, { [styles[`size${size}`]]: size })}>
      {children}
    </h1>
  );
}

export default Heading;
