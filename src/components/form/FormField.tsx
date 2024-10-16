import { Children, cloneElement, HTMLAttributes, ReactNode } from 'react';
import {
  useController,
  useFormContext,
  RegisterOptions,
  UseFormReturn,
  FieldValues,
} from 'react-hook-form';
import classNames from 'classnames';
import { mapChildren } from '@/lib/utils';
import styles from './FormField.module.css';

interface FormFieldProps extends HTMLAttributes<HTMLDivElement>, Partial<UseFormReturn> {
  name: string;
  description?: string;
  rules?: RegisterOptions<FieldValues, string>;
  children: any;
}

function FormField({ name, description, rules, className, children, ...props }: FormFieldProps) {
  const { formState, control } = useFormContext();
  const { field } = useController({ name, control, rules });
  const errors = formState?.errors || {};
  const errorMessage = errors[name]?.message as string;

  return (
    <div {...props} className={classNames(styles.input, className)}>
      {typeof children === 'function'
        ? children(field)
        : mapChildren(children, child => (child ? cloneElement(child, field) : null))}
      {description && <div className={styles.description}>{description}</div>}
      {errorMessage && <div className={styles.error}>{errorMessage}</div>}
    </div>
  );
}

export { FormField };
export type { FormFieldProps };
