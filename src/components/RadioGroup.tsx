import { forwardRef, ReactNode, Ref } from 'react';
import {
  RadioGroup as AriaRadioGroup,
  RadioGroupProps as AriaRadioGroupProps,
  Radio as AriaRadio,
  RadioProps,
} from 'react-aria-components';
import classNames from 'classnames';
import { Label } from './Label';
import styles from './RadioGroup.module.css';

interface RadioGroupProps extends AriaRadioGroupProps {
  label?: string;
}

const RadioGroup = forwardRef(
  ({ label, children, className, ...props }: RadioGroupProps, ref: Ref<any>) => {
    return (
      <AriaRadioGroup {...props} ref={ref} className={classNames(styles.radiogroup, className)}>
        {label && <Label>{label}</Label>}
        {children as ReactNode}
      </AriaRadioGroup>
    );
  },
);

function Radio({ children, className, ...props }: RadioProps) {
  return (
    <AriaRadio {...props} className={classNames(styles.radio, className)}>
      {children}
    </AriaRadio>
  );
}

export { RadioGroup, Radio };
export type { RadioProps, RadioGroupProps };
