import { Switch, SwitchProps } from 'react-aria-components';
import classNames from 'classnames';
import styles from './Switch.module.css';

function _Switch({ children, className, ...props }: SwitchProps) {
  return (
    <Switch {...props} className={classNames(styles.switch, className)}>
      <div className={styles.track}>
        <div className={styles.knob} />
      </div>
      {children as any}
    </Switch>
  );
}

export { _Switch as Switch };

export default _Switch;
