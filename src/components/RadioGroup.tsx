import { ReactNode } from 'react';
import {
  RadioGroup as AriaRadioGroup,
  RadioGroupProps as AriaRadioGroupProps,
  Radio as AriaRadio,
  RadioProps,
} from 'react-aria-components';
import classNames from 'classnames';
import { Label } from './Label';
import styles from './RadioGroup.module.css';

export interface RadioGroupProps extends AriaRadioGroupProps {
  label?: string;
}

export function RadioGroup({ label, children, className, ...props }: RadioGroupProps) {
  return (
    <AriaRadioGroup {...props} className={classNames(styles.radiogroup, className)}>
      {label && <Label>{label}</Label>}
      {children as ReactNode}
    </AriaRadioGroup>
  );
}

export type { RadioProps };

export function Radio({ children, className, ...props }: RadioProps) {
  return (
    <AriaRadio {...props} className={classNames(styles.radio, className)}>
      {children}
    </AriaRadio>
  );
}
