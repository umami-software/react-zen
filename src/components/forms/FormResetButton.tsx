import type { ReactNode } from 'react';
import type { PressEvent } from 'react-aria-components';
import { type FieldValues, useFormContext } from 'react-hook-form';
import { Button, type ButtonProps } from '../Button';

export interface FormResetButtonProps extends ButtonProps {
  children?: ReactNode;
  values?: FieldValues | { [p: string]: any };
}

export function FormResetButton({
  values = {},
  children,
  onPress,
  ...props
}: FormResetButtonProps) {
  const { reset } = useFormContext();

  const handleReset = (e: PressEvent) => {
    reset(values);
    onPress?.(e);
  };

  return (
    <Button {...props} type="reset" onPress={handleReset}>
      {children}
    </Button>
  );
}
