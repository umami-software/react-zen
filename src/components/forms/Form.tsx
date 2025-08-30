import { useEffect, HTMLAttributes, ReactNode } from 'react';
import { useForm, UseFormProps, SubmitHandler, FormProvider, UseFormReturn } from 'react-hook-form';
import classNames from 'classnames';
import { AlertBanner } from '@/components/AlertBanner';
import styles from './Form.module.css';

interface FormProps extends UseFormProps, Omit<HTMLAttributes<HTMLFormElement>, 'children'> {
  autoComplete?: string;
  onSubmit?: SubmitHandler<any>;
  error?: ReactNode | Error;
  preventSubmit?: boolean;
  children?: ReactNode | ((e: UseFormReturn) => ReactNode);
}

function Form({
  autoComplete,
  onSubmit,
  error,
  preventSubmit = false,
  // useForm props
  mode,
  disabled,
  reValidateMode,
  defaultValues,
  values,
  errors,
  resetOptions,
  resolver,
  context,
  shouldFocusError,
  shouldUnregister,
  shouldUseNativeValidation,
  progressive,
  criteriaMode,
  delayError,
  // Element props
  className,
  children,
  ...props
}: FormProps) {
  const formValues = useForm({
    mode,
    disabled,
    reValidateMode,
    defaultValues,
    values,
    errors,
    resetOptions,
    resolver,
    context,
    shouldFocusError,
    shouldUnregister,
    shouldUseNativeValidation,
    progressive,
    criteriaMode,
    delayError,
  });

  const { handleSubmit } = formValues;
  const onKeyDown =
    !onSubmit || preventSubmit
      ? (e: { key: string; preventDefault: () => any }) => e.key === 'Enter' && e.preventDefault()
      : undefined;

  useEffect(() => {
    formValues.reset(values);
  }, [formValues, values]);

  useEffect(() => {
    if (formValues.formState.isSubmitted) {
      formValues.reset(undefined, { keepDirty: true, keepValues: true });
    }
  }, [error, formValues]);

  return (
    <FormProvider {...formValues}>
      {error && (
        <AlertBanner
          variant="error"
          align="center"
          title={error instanceof Error ? error?.message : error}
        />
      )}
      <form
        {...props}
        autoComplete={autoComplete}
        className={classNames(styles.form, className)}
        onSubmit={onSubmit ? handleSubmit(onSubmit) : undefined}
        onKeyDown={onKeyDown}
      >
        {typeof children === 'function' ? children(formValues) : children}
      </form>
    </FormProvider>
  );
}

export { Form };
export type { FormProps };
