import { ToggleButton, ToggleButtonProps } from 'react-aria-components';
import classNames from 'classnames';
import styles from './Toggle.module.css';

function Toggle({ children, className, ...props }: ToggleButtonProps) {
  return (
    <ToggleButton {...props} className={classNames(styles.toggle, className)}>
      {children}
    </ToggleButton>
  );
}

export { Toggle };
export type { ToggleButtonProps as ToggleProps };

export default Toggle;
