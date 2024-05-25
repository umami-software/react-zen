import { ReactNode } from 'react';
import classNames from 'classnames';
import styles from './Demo.module.css';

export function Demo({
  direction = 'column',
  children,
}: {
  direction: string;
  children: ReactNode;
}) {
  return <div className={classNames(styles.demo, styles[direction])}>{children}</div>;
}

export default Demo;
