import { ReactNode } from 'react';
import { Button as AriaButton, ButtonProps as AriaButtonProps } from 'react-aria-components';
import classNames from 'classnames';
import { Slot } from './Slot';
import styles from './Button.module.css';

export interface ButtonProps extends AriaButtonProps {
  variant?: 'primary' | 'outline' | 'quiet' | 'danger' | 'zero';
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  asChild?: boolean;
  children?: ReactNode;
}

export function Button({
  variant,
  size = 'md',
  asChild,
  preventFocusOnPress = true,
  className,
  children,
  ...props
}: ButtonProps) {
  const Component = asChild ? Slot : AriaButton;
  const buttonProps = Component === AriaButton ? { preventFocusOnPress } : undefined;

  return (
    <Component
      {...props}
      {...buttonProps}
      className={classNames(
        styles.button,
        className,
        variant && styles[`variant-${variant}`],
        size && styles[size],
      )}
    >
      {children as ReactNode}
    </Component>
  );
}
