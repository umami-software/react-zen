import { useFormContext } from 'react-hook-form';
import { LoadingButton, LoadingButtonProps } from '../LoadingButton';

function FormSubmitButton({
  variant = 'primary',
  children,
  disabled,
  isLoading,
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
      disabled={
        disabled !== undefined ? disabled : !isDirty || !isValid || isSubmitting || isSubmitted
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

export { FormSubmitButton };
