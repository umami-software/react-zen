import { useFormContext } from 'react-hook-form';
import { PressEvent } from 'react-aria-components';
import { Button, ButtonProps } from '../Button';

function FormResetButton(props: ButtonProps) {
  const { children, onPress, ...buttonProps } = props;
  const { reset } = useFormContext();

  const handleReset = (e: PressEvent) => {
    reset();
    onPress?.(e);
  };

  return (
    <Button {...buttonProps} type="reset" onPress={handleReset}>
      {children}
    </Button>
  );
}

export { FormResetButton };
