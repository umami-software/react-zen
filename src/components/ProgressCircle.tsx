import { ProgressBar, ProgressBarProps } from 'react-aria-components';
import classNames from 'classnames';
import styles from './ProgressCircle.module.css';

interface ProgressCircleProps extends ProgressBarProps {
  showValue?: boolean;
}

function ProgressCircle({ className, showValue, ...props }: ProgressCircleProps) {
  return (
    <ProgressBar {...props} className={classNames(styles.progresscircle, className)}>
      {({ percentage = 0, valueText }) => {
        const radius = 45;
        const circumference = radius * 2 * Math.PI;
        const offset = circumference - (percentage / 100) * circumference;

        return (
          <>
            <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
              <circle className={styles.track} cx="50" cy="50" r="45" />
              <circle
                className={styles.fill}
                cx="50"
                cy="50"
                r="45"
                strokeDasharray={`${circumference} ${circumference}`}
                strokeDashoffset={offset}
              />
            </svg>
            {showValue && <label className={styles.value}>{valueText}</label>}
          </>
        );
      }}
    </ProgressBar>
  );
}

export { ProgressCircle };
