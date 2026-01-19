import type { ReactNode } from 'react';
import { FieldValues, useFormContext } from 'react-hook-form';
import { PressEvent } from 'react-aria-components';
import { Button, ButtonProps } from '../Button';

interface FormResetButtonProps extends ButtonProps {
  children?: ReactNode;
  values?: FieldValues | { [p: string]: any };
}

function FormResetButton({ values = {}, children, onPress, ...props }: FormResetButtonProps) {
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

export { FormResetButton };
export type { FormResetButtonProps };
