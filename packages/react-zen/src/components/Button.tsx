import { Button as BaseButton, type ButtonProps as BaseButtonProps } from '@base-ui/react/button';
import type { MouseEvent, ReactNode } from 'react';
import type { RenderProp } from './lib/render';
import { type ButtonVariants, button } from './variants';

export interface ButtonProps extends Omit<BaseButtonProps, 'className' | 'render'>, ButtonVariants {
  render?: RenderProp<ButtonRenderProps>;
  children?: ReactNode;
  className?: string;
  isDisabled?: boolean;
  onPress?: (event: MouseEvent<HTMLElement>) => void;
  preventFocusOnPress?: boolean;
}

export interface ButtonRenderProps {
  className: string;
  children: ReactNode;
  [key: string]: unknown;
}

export function Button({
  variant,
  size = 'md',
  render,
  preventFocusOnPress: _preventFocusOnPress = true,
  isDisabled,
  disabled,
  onPress,
  onClick,
  className,
  children,
  ...props
}: ButtonProps) {
  const buttonClassName = button({ variant, size, className });

  const handleClick = (event: any) => {
    onClick?.(event);
    if (!event.defaultPrevented) {
      onPress?.(event);
    }
  };

  return (
    <BaseButton
      {...props}
      render={render as BaseButtonProps['render']}
      disabled={isDisabled ?? disabled}
      className={buttonClassName}
      onClick={handleClick}
    >
      {children}
    </BaseButton>
  );
}
