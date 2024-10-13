import {
  RadioGroup as AriaRadioGroup,
  RadioGroupProps,
  Radio as AriaRadio,
  RadioProps,
} from 'react-aria-components';
import classNames from 'classnames';
import styles from './RadioGroup.module.css';

function RadioGroup({ children, className, ...props }: RadioGroupProps) {
  return (
    <AriaRadioGroup {...props} className={classNames(styles.radiogroup, className)}>
      {children}
    </AriaRadioGroup>
  );
}

function Radio({ children, className, ...props }: RadioProps) {
  return (
    <AriaRadio {...props} className={classNames(styles.radio, className)}>
      {children}
    </AriaRadio>
  );
}

export { RadioGroup, Radio };
export type { RadioProps, RadioGroupProps };
