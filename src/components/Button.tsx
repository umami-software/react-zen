import { ReactNode } from 'react';
import { Button as _Button, ButtonProps as _ButtonProps } from 'react-aria-components';
import classNames from 'classnames';
import { Slot } from '@radix-ui/react-slot';
import styles from './Button.module.css';

interface ButtonProps extends _ButtonProps {
  variant?: 'primary' | 'secondary' | 'outline' | 'quiet' | 'danger' | 'zero';
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  asChild?: boolean;
  slot?: string;
}

function Button({
  variant = 'secondary',
  size = 'md',
  preventFocusOnPress = true,
  asChild,
  className,
  children,
  ...props
}: ButtonProps) {
  const Component = asChild ? Slot : _Button;

  return (
    <Component
      {...props}
      preventFocusOnPress={Component === _Button ? preventFocusOnPress : undefined}
      className={classNames(
        styles.button,
        className,
        variant && styles[variant],
        size && styles[size],
      )}
    >
      {children as ReactNode}
    </Component>
  );
}

export { Button };
export type { ButtonProps };
