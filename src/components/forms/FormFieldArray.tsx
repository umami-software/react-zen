import { ReactNode } from 'react';
import { useFieldArray, useFormContext } from 'react-hook-form';

export interface FormFieldArrayProps {
  name: string;
  children: (props: any) => ReactNode;
}

export function FormFieldArray({ name, children }: FormFieldArrayProps) {
  const context = useFormContext();
  const { control } = context;
  const { fields, append, prepend, remove, swap, move, insert } = useFieldArray({
    control,
    name,
  });

  return children({ context, fields, append, prepend, remove, swap, move, insert });
}
