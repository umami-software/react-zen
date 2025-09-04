import classNames from 'classnames';
import { Dots } from './Dots';
import { Spinner } from './Spinner';
import styles from './Loading.module.css';

export interface LoadingProps {
  size?: 'sm' | 'md' | 'lg';
  icon?: 'dots' | 'spinner';
  placement?: 'absolute' | 'center' | 'inline';
  className?: string;
}

export function Loading({
  size,
  placement = 'inline',
  icon = 'spinner',
  className,
  ...props
}: LoadingProps) {
  return (
    <div {...props} className={classNames(styles.loading, className, styles[placement])}>
      {icon === 'dots' && <Dots size={size} />}
      {icon === 'spinner' && <Spinner size={size} />}
    </div>
  );
}
