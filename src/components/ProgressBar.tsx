import classNames from 'classnames';
import styles from './ProgressBar.module.css';

export interface ProgressBarProps {
  value: number;
  minValue?: number;
  maxValue?: number;
  className?: string;
}

export function ProgressBar(props: ProgressBarProps) {
  const { value = 0, minValue = 0, maxValue = 100, className, ...domProps } = props;

  const percentValue = Math.round(((value - minValue) / (maxValue - minValue)) * 100);

  return (
    <div {...domProps} className={classNames(styles.progressbar, className)}>
      <div className={styles.track}>
        <div className={styles.fill} style={{ width: `${percentValue}%` }} />
      </div>
    </div>
  );
}

export default ProgressBar;
