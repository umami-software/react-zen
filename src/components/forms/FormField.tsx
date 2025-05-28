import { cloneElement, HTMLAttributes, Children } from 'react';
import {
  useController,
  useFormContext,
  RegisterOptions,
  UseFormReturn,
  FieldValues,
} from 'react-hook-form';
import classNames from 'classnames';
import styles from './FormField.module.css';

export interface FormFieldProps extends HTMLAttributes<HTMLDivElement>, Partial<UseFormReturn> {
  name: string;
  description?: string;
  label?: string;
  rules?: RegisterOptions<FieldValues, string>;
  children: any;
}

export function FormField({
  name,
  description,
  label,
  rules,
  className,
  children,
  ...props
}: FormFieldProps) {
  const context = useFormContext();
  const { formState, control } = context;

  const controller = useController({ name, control, rules });
  const { field } = controller;

  const errors = formState?.errors || {};
  const errorMessage = errors[name]?.message as string;

  return (
    <div {...props} className={classNames(styles.input, className)}>
      {Children.map(
        typeof children === 'function' ? children({ context, controller }) : children,
        child =>
          child ? cloneElement(child, { ...field, label: child.props.label || label }) : null,
      )}
      {description && <div className={styles.description}>{description}</div>}
      {errorMessage && <div className={styles.error}>{errorMessage}</div>}
    </div>
  );
}
