import { ReactNode } from 'react';
import { Button, ButtonProps } from './Button';
import { Icon } from './Icon';
import { Spinner } from './Spinner';

interface LoadingButtonProps extends ButtonProps {
  disabled?: boolean;
  isLoading?: boolean;
}
function LoadingButton({ isLoading, children, ...props }: LoadingButtonProps) {
  return (
    <Button {...props}>
      {isLoading && (
        <Icon size="sm">
          <Spinner />
        </Icon>
      )}
      {children as ReactNode}
    </Button>
  );
}

export { LoadingButton };
export type { LoadingButtonProps };
