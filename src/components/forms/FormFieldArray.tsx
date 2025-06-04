import { HTMLAttributes, ReactNode } from 'react';
import { useFieldArray, useFormContext } from 'react-hook-form';
import classNames from 'classnames';
import { Label } from '@/components';
import styles from './FormField.module.css';

export interface FormFieldArrayProps extends Omit<HTMLAttributes<HTMLDivElement>, 'children'> {
  name: string;
  description?: string;
  label?: string;
  children: (props: any) => ReactNode;
}

export function FormFieldArray({
  name,
  description,
  label,
  className,
  children,
  ...props
}: FormFieldArrayProps) {
  const context = useFormContext();
  const { control, formState } = context;
  const fieldProps = useFieldArray({
    control,
    name,
  });

  const errors = formState?.errors || {};
  const errorMessage = errors[name]?.message as string;

  return (
    <div {...props} className={classNames(styles.input, className)}>
      {label && <Label>{label}</Label>}
      {description && <div className={styles.description}>{description}</div>}
      {errorMessage && <div className={styles.error}>{errorMessage}</div>}
      {children({ context, ...fieldProps })}
    </div>
  );
}
