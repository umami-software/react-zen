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

  return (
    <LoadingButton
      {...props}
      type="submit"
      variant={variant}
      isDisabled={
        isDisabled !== undefined ? isDisabled : !isDirty || !isValid || isSubmitting || isSubmitted
      }
      isLoading={
        isLoading !== undefined
          ? isLoading
          : isValid && isSubmitSuccessful && (isSubmitting || isSubmitted)
      }
    >
      {children}
    </LoadingButton>
  );
}
