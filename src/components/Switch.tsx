import { Switch as AriaSwitch, SwitchProps } from 'react-aria-components';
import classNames from 'classnames';
import styles from './Switch.module.css';

function Switch({ children, className, ...props }: SwitchProps) {
  return (
    <AriaSwitch {...props} className={classNames(styles.switch, className)}>
      <div className={styles.track}>
        <div className={styles.knob} />
      </div>
      {children as any}
    </AriaSwitch>
  );
}

export { Switch };
export type { SwitchProps };
