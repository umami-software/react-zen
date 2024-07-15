import classNames from 'classnames';
import { CommonProps } from 'components/types';
// eslint-disable-next-line css-modules/no-unused-class
import styles from './Spinner.module.css';

export interface SpinnerProps extends CommonProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  quiet?: boolean;
}

export function Spinner(props: SpinnerProps) {
  const { size = 'lg', quiet, className, ...domProps } = props;
  return (
    <div
      {...domProps}
      className={classNames(styles.spinner, className, styles[`size-${size}`], {
        [styles.quiet]: quiet,
      })}
    >
      <svg viewBox="25 25 50 50">
        <circle className={styles.track} cx="50" cy="50" r="20" />
        <circle className={styles.fill} cx="50" cy="50" r="20" />
      </svg>
    </div>
  );
}

export default Spinner;
