import { useFormContext } from 'react-hook-form';
import { LoadingButton, type LoadingButtonProps } from '../LoadingButton';

export function FormSubmitButton({
  variant = 'primary',
  isDisabled,
  isLoading,
  children,
  ...props
}: LoadingButtonProps) {
  const {
    formState: { isDirty, isValid, isSubmitting },
  } = useFormContext();

  return (
    <LoadingButton
      {...props}
      type="submit"
      variant={variant}
      isDisabled={isDisabled ?? (!isDirty || !isValid || isSubmitting)}
      isLoading={isLoading ?? isSubmitting}
    >
      {children}
    </LoadingButton>
  );
}
