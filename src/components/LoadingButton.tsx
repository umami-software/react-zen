import { ReactNode } from 'react';
import { Button, ButtonProps } from './Button';
import { Dots } from './Dots';
import { Icon } from './Icon';
import { Spinner } from './Spinner';

interface LoadingButtonProps extends ButtonProps {
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
