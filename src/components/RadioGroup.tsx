import { ReactNode } from 'react';
import {
  RadioGroup as AriaRadioGroup,
  RadioGroupProps as AriaRadioGroupProps,
  Radio as AriaRadio,
  RadioProps,
  Label,
} from 'react-aria-components';
import classNames from 'classnames';
import inputStyles from './Input.module.css';
import styles from './RadioGroup.module.css';

interface RadioGroupProps extends AriaRadioGroupProps {
  label?: string;
}

function RadioGroup({ label, children, className, ...props }: RadioGroupProps) {
  return (
    <AriaRadioGroup {...props} className={classNames(styles.radiogroup, className)}>
      {label && <Label className={inputStyles.label}>{label}</Label>}
      {children as ReactNode}
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
