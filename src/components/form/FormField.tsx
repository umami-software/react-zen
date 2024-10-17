import { Children, cloneElement, HTMLAttributes } from 'react';
import {
  useController,
  useFormContext,
  RegisterOptions,
  UseFormReturn,
  FieldValues,
} from 'react-hook-form';
import classNames from 'classnames';
import styles from './FormField.module.css';

interface FormFieldProps extends HTMLAttributes<HTMLDivElement>, Partial<UseFormReturn> {
  name: string;
  description?: string;
  rules?: RegisterOptions<FieldValues, string>;
}

function FormField({ name, description, rules, className, children, ...props }: FormFieldProps) {
  const { formState, control } = useFormContext();
  const { field } = useController({ name, control, rules });
  const errors = formState?.errors || {};
  const errorMessage = errors[name]?.message as string;
  const child: any = Children.only(children);

  return (
    <div {...props} className={classNames(styles.input, className)}>
      {typeof child === 'function' ? child(field) : cloneElement(child, field)}
      {description && <div className={styles.description}>{description}</div>}
      {errorMessage && <div className={styles.error}>{errorMessage}</div>}
    </div>
  );
}

export { FormField };
export type { FormFieldProps };
