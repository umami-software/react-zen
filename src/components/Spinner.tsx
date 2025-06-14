import { HTMLAttributes } from 'react';
import classNames from 'classnames';
import styles from './Spinner.module.css';

export interface SpinnerProps extends HTMLAttributes<HTMLDivElement> {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  quiet?: boolean;
  isDisabled?: boolean;
}

export function Spinner(props: SpinnerProps) {
  const { size = 'lg', quiet, className, isDisabled, ...domProps } = props;
  return (
    <div
      {...domProps}
      className={classNames(styles.spinner, className, styles[`size-${size}`], {
        [styles.quiet]: quiet,
        [styles.disabled]: isDisabled,
      })}
    >
      <svg viewBox="25 25 50 50">
        <circle className={styles.track} cx="50" cy="50" r="20" />
        <circle className={styles.fill} cx="50" cy="50" r="20" />
      </svg>
    </div>
  );
}
