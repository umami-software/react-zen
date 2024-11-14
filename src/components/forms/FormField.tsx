import { cloneElement, HTMLAttributes, forwardRef, Ref, Children } from 'react';
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
  label?: string;
  rules?: RegisterOptions<FieldValues, string>;
  children: any;
}

const FormField = forwardRef(
  (
    { name, description, label, rules, className, children, ...props }: FormFieldProps,
    ref: Ref<any>,
  ) => {
    const { formState, control } = useFormContext();
    const { field } = useController({ name, control, rules });
    const errors = formState?.errors || {};
    const errorMessage = errors[name]?.message as string;

    return (
      <div {...props} ref={ref} className={classNames(styles.input, className)}>
        {typeof children === 'function'
          ? children(field)
          : Children.map(children, child =>
              child ? cloneElement(child, { ...field, label: child.props.label || label }) : null,
            )}
        {description && <div className={styles.description}>{description}</div>}
        {errorMessage && <div className={styles.error}>{errorMessage}</div>}
      </div>
    );
  },
);

export { FormField };
export type { FormFieldProps };
