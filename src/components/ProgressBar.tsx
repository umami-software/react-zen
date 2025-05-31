import {
  ProgressBar as AriaProgressBar,
  ProgressBarProps as AriaProgressBarProps,
} from 'react-aria-components';
import classNames from 'classnames';
import styles from './ProgressBar.module.css';

export interface ProgressBarProps extends AriaProgressBarProps {
  showPercentage?: boolean;
}

function ProgressBar({ className, showPercentage, ...props }: ProgressBarProps) {
  return (
    <AriaProgressBar {...props} className={classNames(styles.progressbar, className)}>
      {({ percentage = 0, valueText }) => {
        return (
          <>
            <div className={styles.track}>
              <div className={styles.fill} style={{ width: `${percentage}%` }} />
            </div>
            {showPercentage && <div className={styles.value}>{valueText}</div>}
          </>
        );
      }}
    </AriaProgressBar>
  );
}

export { ProgressBar };
