import { ReactNode } from 'react';
import { Button, ButtonProps } from 'react-aria-components';
import classNames from 'classnames';
import { Slot } from '@radix-ui/react-slot';
import styles from './Button.module.css';

interface _ButtonProps extends ButtonProps {
  variant?: 'primary' | 'secondary' | 'outline' | 'quiet' | 'danger' | 'zero';
  size?: 'xs' | 'sm' | 'md' | 'lg';
  asChild?: boolean;
  slot?: string;
}

function _Button({
  variant = 'secondary',
  size = 'md',
  asChild,
  className,
  children,
  ...props
}: _ButtonProps) {
  const Component = asChild ? Slot : Button;

  return (
    <Component
      {...props}
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

export { _Button as Button };
export type { _ButtonProps as ButtonProps };

export default _Button;
