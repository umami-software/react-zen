import { ReactNode } from 'react';
import classNames from 'classnames';
import styles from './StatusLight.module.css';

export interface StatusLightProps {
  color?: string;
  variant?: 'success' | 'warning' | 'error' | 'active' | 'inactive' | 'none';
  className?: string;
  children?: ReactNode;
}

export function StatusLight(props: StatusLightProps) {
  const { color, variant = 'inactive', children, className, ...domProps } = props;

  return (
    <div {...domProps} className={classNames(styles.statuslight, className)}>
      <div className={styles.bg}>
        <div
          className={classNames(styles.status, styles[variant])}
          style={{ backgroundColor: color }}
        />
      </div>
      {children}
    </div>
  );
}
