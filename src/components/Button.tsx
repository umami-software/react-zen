import type { ReactNode } from 'react';
import { Button as AriaButton, type ButtonProps as AriaButtonProps } from 'react-aria-components';
import { Slot } from './Slot';
import { type ButtonVariants, button } from './variants';

export interface ButtonProps extends Omit<AriaButtonProps, 'className'>, ButtonVariants {
  asChild?: boolean;
  children?: ReactNode;
  className?: string;
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
    <Component {...props} {...buttonProps} className={button({ variant, size, className })}>
      {children as ReactNode}
    </Component>
  );
}
