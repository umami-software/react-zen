import { HTMLAttributes, ReactNode } from 'react';
import { FieldValues, RegisterOptions, useFieldArray, useFormContext } from 'react-hook-form';
import classNames from 'classnames';
import { useFieldId } from '@/components/hooks/useFieldId';
import styles from './FormField.module.css';
import { Label } from '../Label';

export interface FormFieldArrayProps extends Omit<HTMLAttributes<HTMLDivElement>, 'children'> {
  name: string;
  description?: string;
  label?: string;
  rules?: RegisterOptions<FieldValues, string>;
  children: (props: any) => ReactNode;
}

export function FormFieldArray({
  id,
  name,
  description,
  label,
  rules,
  className,
  children,
  ...props
}: FormFieldArrayProps) {
  const fieldId = useFieldId(id);
  const context = useFormContext();
  const { formState, control, register } = context;

  const fieldProps = useFieldArray({
    control,
    name,
  });

  register(name, rules);

  const errors = formState?.errors || {};
  const errorMessage = errors[name]?.message as string;

  return (
    <div {...props} className={classNames(styles.input, className)}>
      {label && <Label htmlFor={fieldId}>{label}</Label>}
      {description && <div className={styles.description}>{description}</div>}
      {errorMessage && <div className={styles.error}>{errorMessage}</div>}
      {children({ ...context, ...fieldProps })}
    </div>
  );
}
