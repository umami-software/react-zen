import { ReactElement } from 'react';
import {
  Controller,
  type ControllerProps,
  type ControllerRenderProps,
  type FieldValues,
  type ControllerFieldState,
  type UseFormStateReturn,
} from 'react-hook-form';

export interface FormControllerProps extends ControllerProps {
  children: ({
    field,
    fieldState,
    formState,
  }: {
    field: ControllerRenderProps<FieldValues, string>;
    fieldState: ControllerFieldState;
    formState: UseFormStateReturn<FieldValues>;
  }) => ReactElement;
}

export function FormController({ children, ...props }: FormControllerProps) {
  return <Controller {...props} render={children} />;
}
