import { ReactNode } from 'react';
import classNames from 'classnames';
import styles from './Example.module.css';

export function Example({
  direction = 'column',
  children,
}: {
  direction: string;
  children: ReactNode;
}) {
  return <div className={classNames(styles.demo, styles[direction])}>{children}</div>;
}
