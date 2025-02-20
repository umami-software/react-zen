import { useEffect, HTMLAttributes, ReactNode } from 'react';
import { useForm, UseFormProps, SubmitHandler, FormProvider, UseFormReturn } from 'react-hook-form';
import classNames from 'classnames';
import { Responsive, Spacing } from '@/lib/types';
import styles from './Form.module.css';
import { AlertBanner } from '../AlertBanner';
import { Column } from '../Column';
import { Text } from '../Text';
import { Icon } from '../Icon';
import { Icons } from '../Icons';

interface FormProps extends UseFormProps, Omit<HTMLAttributes<HTMLFormElement>, 'children'> {
  gap?: Responsive<Spacing>;
  autoComplete?: string;
  onSubmit?: SubmitHandler<any>;
  error?: ReactNode;
  preventSubmit?: boolean;
  children?: ReactNode | ((e: UseFormReturn) => ReactNode);
}

function Form({
  gap = '3',
  autoComplete,
  onSubmit,
  error,
  preventSubmit = false,
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
  }, [values]);

  useEffect(() => {
    if (formValues.formState.isSubmitted) {
      formValues.reset(undefined, { keepDirty: true, keepValues: true });
    }
  }, [error]);

  return (
    <FormProvider {...formValues}>
      {error && (
        <AlertBanner variant="error" className={styles.error}>
          <Icon size="lg" className={styles.icon}>
            <Icons.Alert />
          </Icon>
          <Text className={styles.text}>{error}</Text>
        </AlertBanner>
      )}
      <form
        {...props}
        autoComplete={autoComplete}
        className={classNames(styles.form, className)}
        onSubmit={onSubmit ? handleSubmit(onSubmit) : undefined}
        onKeyDown={onKeyDown}
      >
        <Column gap={gap}>
          {typeof children === 'function' ? children(formValues) : children}
        </Column>
      </form>
    </FormProvider>
  );
}

export { Form };
export type { FormProps };
