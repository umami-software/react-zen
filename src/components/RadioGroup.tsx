import { RadioGroup, RadioGroupProps, Radio, RadioProps } from 'react-aria-components';
import styles from './RadioGroup.module.css';
import classNames from 'classnames';

function _RadioGroup({ children, className, ...props }: RadioGroupProps) {
  return (
    <RadioGroup {...props} className={classNames(styles.radiogroup, className)}>
      {children}
    </RadioGroup>
  );
}

function _Radio({ children, className, ...props }: RadioProps) {
  return (
    <Radio {...props} className={classNames(styles.radio, className)}>
      {children}
    </Radio>
  );
}

export { _RadioGroup as RadioGroup, _Radio as Radio };
export type { RadioProps, RadioGroupProps };

export default _RadioGroup;
