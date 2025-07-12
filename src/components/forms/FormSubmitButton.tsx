import { useFormContext } from 'react-hook-form';
import { LoadingButton, LoadingButtonProps } from '../LoadingButton';

export function FormSubmitButton({
  variant = 'primary',
  isDisabled,
  isLoading,
  children,
  ...props
}: LoadingButtonProps) {
  const {
    formState: { isDirty, isValid, isSubmitting, isSubmitted, isSubmitSuccessful },
  } = useFormContext();

  console.log({ isDirty, isValid, isSubmitting, isSubmitted, isSubmitSuccessful });

  return (
    <LoadingButton
      {...props}
      type="submit"
      variant={variant}
      isDisabled={isDisabled !== undefined ? isDisabled : !isDirty || !isValid || isSubmitting}
      isLoading={isLoading !== undefined ? isLoading : isSubmitting}
    >
      {children}
    </LoadingButton>
  );
}
