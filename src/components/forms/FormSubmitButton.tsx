import { useFormContext } from 'react-hook-form';
import { LoadingButton, LoadingButtonProps } from '../LoadingButton';

function FormSubmitButton({
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

export { FormSubmitButton };
