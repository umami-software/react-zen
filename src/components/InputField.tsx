import { ReactNode } from 'react';
import classNames from 'classnames';
import { Label } from './Label';
import { Box, BoxProps } from './Box';
import { Slot } from './Slot';
import styles from './InputField.module.css';

export interface InputFieldProps extends BoxProps {
  label?: string;
  isReadOnly?: boolean;
  isDisabled?: boolean;
  children: ReactNode;
}

export function InputField({
  label,
  isReadOnly,
  isDisabled,
  className,
  children,
  ...props
}: InputFieldProps) {
  return (
    <Box>
      {label && <Label>{label}</Label>}
      <Slot
        {...props}
        className={classNames(
          styles.field,
          isReadOnly && styles.readonly,
          isDisabled && styles.disabled,
          className,
        )}
      >
        {children}
      </Slot>
    </Box>
  );
}
