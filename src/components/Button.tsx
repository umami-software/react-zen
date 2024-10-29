import { forwardRef, ReactNode, Ref } from 'react';
import { Button as AriaButton, ButtonProps as _ButtonProps } from 'react-aria-components';
import classNames from 'classnames';
import { Slot } from '@radix-ui/react-slot';
import styles from './Button.module.css';

interface ButtonProps extends _ButtonProps {
  variant?: 'primary' | 'secondary' | 'outline' | 'quiet' | 'danger' | 'zero';
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  asChild?: boolean;
  slot?: string;
}

const Button = forwardRef(
  (
    {
      variant = 'secondary',
      size = 'md',
      preventFocusOnPress = true,
      asChild,
      className,
      children,
      ...props
    }: ButtonProps,
    ref: Ref<any>,
  ) => {
    const Component = asChild ? Slot : AriaButton;

    return (
      <Component
        {...props}
        ref={ref}
        preventFocusOnPress={Component === AriaButton ? preventFocusOnPress : undefined}
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
  },
);

export { Button };
export type { ButtonProps };
