import classNames from 'classnames';
import styles from './Banner.module.css';

export interface BannerProps {
  variant?: 'success' | 'warning' | 'error' | 'none';
  outline?: boolean;
  className?: string;
  children?: React.ReactNode;
}

export function Banner(props: BannerProps) {
  const { variant = 'none', outline, children, className, ...domProps } = props;

  return (
    <div
      {...domProps}
      className={classNames(styles.banner, className, styles[variant], {
        [styles.outline]: outline,
      })}
    >
      {children}
    </div>
  );
}

export default Banner;
