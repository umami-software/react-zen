import {
  ProgressBar as AriaProgressBar,
  ProgressBarProps as AriaProgressBarProps,
} from 'react-aria-components';
import classNames from 'classnames';
import styles from './ProgressBar.module.css';

export interface ProgressBarProps extends AriaProgressBarProps {
  showValue?: boolean;
}

function ProgressBar({ className, showValue, ...props }: ProgressBarProps) {
  return (
    <AriaProgressBar {...props} className={classNames(styles.progressbar, className)}>
      {({ percentage = 0, valueText }) => {
        return (
          <>
            <div className={styles.track}>
              <div className={styles.fill} style={{ width: `${percentage}%` }} />
            </div>
            {showValue && <div className={styles.value}>{valueText}</div>}
          </>
        );
      }}
    </AriaProgressBar>
  );
}

export { ProgressBar };
