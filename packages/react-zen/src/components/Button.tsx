import { Button as BaseButton, type ButtonProps as BaseButtonProps } from '@base-ui/react/button';
import type { MouseEvent, ReactNode } from 'react';
import { type RenderProp, resolveRender } from './lib/render';
import { type ButtonVariants, button } from './variants';

export interface ButtonProps
  extends Omit<BaseButtonProps, 'className' | 'disabled' | 'render'>,
    ButtonVariants {
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
  onPress,
  onClick,
  className,
  children,
  ...props
}: ButtonProps) {
  const buttonClassName = button({ variant, size, className });

  const renderProps: ButtonRenderProps = {
    ...props,
    className: buttonClassName,
    children,
  };

  const handleClick = (event: any) => {
    onClick?.(event);
    if (!event.defaultPrevented) {
      onPress?.(event);
    }
  };

  const defaultElement = (
    <BaseButton {...props} disabled={isDisabled} className={buttonClassName} onClick={handleClick}>
      {children}
    </BaseButton>
  );

  return resolveRender(render, renderProps, defaultElement);
}
