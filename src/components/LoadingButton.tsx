import type { ReactNode } from 'react';
import { Button, ButtonProps } from './Button';
import { Icon } from './Icon';
import { Spinner } from './Spinner';

interface LoadingButtonProps extends ButtonProps {
  children?: ReactNode;
  isDisabled?: boolean;
  isLoading?: boolean;
  showText?: boolean;
}

function LoadingButton({
  isLoading,
  isDisabled,
  showText = true,
  children,
  ...props
}: LoadingButtonProps) {
  return (
    <Button {...props} isDisabled={isDisabled}>
      {isLoading && (
        <Icon size="sm">
          <Spinner isDisabled={isDisabled} />
        </Icon>
      )}
      {showText && children}
    </Button>
  );
}

export { LoadingButton };
export type { LoadingButtonProps };
