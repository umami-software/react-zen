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
  variant?: 'circle' | 'box';
}

export function RadioGroup({
  variant = 'circle',
  label,
  children,
  className,
  ...props
}: RadioGroupProps) {
  return (
    <AriaRadioGroup
      aria-label="RadioGroup"
      {...props}
      className={classNames(styles.radiogroup, styles[`variant-${variant}`], className)}
    >
      {label && <Label>{label}</Label>}
      <div className={styles.inputs}>{children as ReactNode}</div>
    </AriaRadioGroup>
  );
}

export type { RadioProps };

export function Radio({ children, className, ...props }: RadioProps) {
  return (
    <AriaRadio aria-label="Radio" {...props} className={classNames(styles.radio, className)}>
      {children}
    </AriaRadio>
  );
}
