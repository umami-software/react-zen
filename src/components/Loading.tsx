import classNames from 'classnames';
import { Dots } from './Dots';
import { Spinner } from './Spinner';
import styles from './Loading.module.css';

export interface LoadingProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  icon?: 'dots' | 'spinner';
  position?: 'page' | 'center' | 'inline';
  className?: string;
}

export function Loading(props: LoadingProps) {
  const { size, position = 'inline', icon = 'spinner', className, ...domProps } = props;
  return (
    <div {...domProps} className={classNames(styles.loading, className, styles[position])}>
      {icon === 'dots' && <Dots />}
      {icon === 'spinner' && <Spinner size={size} />}
    </div>
  );
}
