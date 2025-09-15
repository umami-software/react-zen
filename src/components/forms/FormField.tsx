import { cloneElement, HTMLAttributes, Children, useId } from 'react';
import { useFormContext, RegisterOptions, UseFormReturn, FieldValues } from 'react-hook-form';
import classNames from 'classnames';
import { useFieldId } from '@/components/hooks/useFieldId';
import { FormController } from './FormController';
import styles from './FormField.module.css';
import { Label } from '../Label';

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
  ...props
}: FormFieldProps) {
  const fieldId = useFieldId(id);
  const context = useFormContext();
  const { control } = context;
  const { invalid, error } = context.getFieldState(name);

  return (
    <div {...props} className={classNames(styles.input, className)}>
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
      {description && <div className={styles.description}>{description}</div>}
      {invalid && <div className={styles.error}>{error?.message}</div>}
    </div>
  );
}
