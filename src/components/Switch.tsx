import { Switch as AriaSwitch, SwitchProps as AriaSwitchProps } from 'react-aria-components';
import classNames from 'classnames';
import { Label } from './Label';
import { Column } from './Column';
import styles from './Switch.module.css';

export interface SwitchProps extends AriaSwitchProps {
  label?: string;
}

export function Switch({ label, children, className, ...props }: SwitchProps) {
  return (
    <Column>
      {label && <Label>{label}</Label>}
      <AriaSwitch {...props} className={classNames(styles.switch, className)}>
        <div className={styles.track}>
          <div className={styles.knob} />
        </div>
        {children as any}
      </AriaSwitch>
    </Column>
  );
}
