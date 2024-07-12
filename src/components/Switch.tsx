import { ReactNode } from 'react';
import { Switch, SwitchProps, Label } from 'react-aria-components';
import classNames from 'classnames';
import styles from './Switch.module.css';

function _Switch({ label, className, ...props }: { label: ReactNode } & SwitchProps) {
  return (
    <Switch {...props} className={classNames(styles.switch, className)}>
      <div className={styles.toggle} />
      {label && <Label className={styles.label}>{label}</Label>}
    </Switch>
  );
}

export { _Switch as Switch };

export default _Switch;
