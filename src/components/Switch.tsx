import { Switch as AriaSwitch, SwitchProps as AriaSwitchProps } from 'react-aria-components';
import classNames from 'classnames';
import { Label } from './Label';
import styles from './Switch.module.css';

interface SwitchProps extends AriaSwitchProps {
  label?: string;
}

function Switch({ label, children, className, ...props }: SwitchProps) {
  return (
    <>
      {label && <Label>{label}</Label>}
      <AriaSwitch {...props} className={classNames(styles.switch, className)}>
        <div className={styles.track}>
          <div className={styles.knob} />
        </div>
        {children as any}
      </AriaSwitch>
    </>
  );
}

export { Switch };
export type { SwitchProps };
