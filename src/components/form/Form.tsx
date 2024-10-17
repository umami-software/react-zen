import { useEffect, HTMLAttributes, ReactNode } from 'react';
import { useForm, UseFormProps, SubmitHandler, FormProvider } from 'react-hook-form';
import classNames from 'classnames';
import styles from './Form.module.css';
import { Column } from '../Column';
import { AlertBanner } from '../AlertBanner';
import { Text } from '../Text';
import { Icon } from '../Icon';
import { Icons } from '../Icons';

interface FormProps extends UseFormProps, HTMLAttributes<HTMLFormElement> {
  values?: object;
  autoComplete?: string;
  onSubmit?: SubmitHandler<any>;
  error?: ReactNode;
  preventSubmit?: boolean;
}

function Form(props: FormProps) {
  const {
    values,
    autoComplete,
    onSubmit,
    error,
    className,
    style,
    children,
    preventSubmit = false,
    ...formProps
  } = props;
  const formValues = useForm({ defaultValues: values });
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
        {...formProps}
        autoComplete={autoComplete}
        className={classNames(styles.form, className)}
        style={style}
        onSubmit={onSubmit ? handleSubmit(onSubmit) : undefined}
        onKeyDown={onKeyDown}
      >
        <Column gap="md">
          {typeof children === 'function' ? (children as any)(formValues) : children}
        </Column>
      </form>
    </FormProvider>
  );
}

export { Form };
export type { FormProps };
