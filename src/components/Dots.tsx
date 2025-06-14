import { HTMLAttributes } from 'react';
import classNames from 'classnames';
import styles from './Dots.module.css';

export interface DotsProps extends HTMLAttributes<HTMLDivElement> {
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

export function Dots({ size = 'md', className, ...props }: DotsProps) {
  return (
    <div {...props} className={classNames(styles.dots, className, styles[`size-${size}`])}>
      <div className={styles.dot} />
      <div className={styles.dot} />
      <div className={styles.dot} />
    </div>
  );
}
