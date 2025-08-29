import { cloneElement, HTMLAttributes, Children } from 'react';
import { useFormContext, RegisterOptions, UseFormReturn, FieldValues } from 'react-hook-form';
import classNames from 'classnames';
import { FormController } from './FormController';
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
  const { control } = context;
  const { invalid, error } = context.getFieldState(name);

  return (
    <div {...props} className={classNames(styles.input, className)}>
      <FormController name={name} control={control} rules={rules}>
        {({ field }) => {
          return Children.map(
            typeof children === 'function' ? children({ context, field }) : children,
            child => {
              if (!child) {
                return null;
              }
              return cloneElement(child, { ...field, label: child?.props?.label || label });
            },
          );
        }}
      </FormController>
      {description && <div className={styles.description}>{description}</div>}
      {invalid && <div className={styles.error}>{error?.message}</div>}
    </div>
  );
}
