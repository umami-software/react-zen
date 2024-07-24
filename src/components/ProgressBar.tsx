import { ProgressBar, ProgressBarProps } from 'react-aria-components';
import classNames from 'classnames';
import styles from './ProgressBar.module.css';

interface _ProgressBarProps extends ProgressBarProps {
  showValue?: boolean;
}

function _ProgressBar({ className, showValue, ...props }: _ProgressBarProps) {
  return (
    <ProgressBar {...props} className={classNames(styles.progressbar, className)}>
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
    </ProgressBar>
  );
}

export { _ProgressBar as ProgressBar };
