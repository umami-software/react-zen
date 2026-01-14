import { cloneElement, HTMLAttributes, Children } from 'react';
import { useFormContext, RegisterOptions, UseFormReturn, FieldValues } from 'react-hook-form';
import { useFieldId } from '@/components/hooks/useFieldId';
import { FormController } from './FormController';
import { Column } from '../Column';
import { Label } from '../Label';
import { Text } from '../Text';
import { cn } from '../lib/tailwind';

export interface FormFieldProps extends HTMLAttributes<HTMLDivElement>, Partial<UseFormReturn> {
  name: string;
  description?: string;
  label?: string;
  rules?: RegisterOptions<FieldValues, string>;
  children: any;
}

export function FormField({
  id,
  name,
  description,
  label,
  rules,
  className,
  children,
  color: _color,
  ...props
}: FormFieldProps) {
  const fieldId = useFieldId(id);
  const context = useFormContext();
  const { control } = context;
  const { invalid, error } = context.getFieldState(name);

  return (
    <Column {...props} gap="1" className={className}>
      {label && <Label htmlFor={fieldId}>{label}</Label>}
      <FormController name={name} control={control} rules={rules}>
        {({ field }) => {
          return Children.map(
            typeof children === 'function' ? children({ context, field }) : children,
            child => {
              if (!child) {
                return null;
              }
              return cloneElement(child, { ...field, id: fieldId });
            },
          );
        }}
      </FormController>
      {description && <Text size="sm" color="muted">{description}</Text>}
      {invalid && <Text size="sm" className="text-red-500">{error?.message}</Text>}
    </Column>
  );
}
