import type { ReactElement, ReactNode } from 'react';
import { Button as AriaButton, type ButtonProps as AriaButtonProps } from 'react-aria-components';
import { type RenderProp, resolveRender } from './lib/render';
import { type ButtonVariants, button } from './variants';

export interface ButtonProps extends Omit<AriaButtonProps, 'className'>, ButtonVariants {
  render?: RenderProp<ButtonRenderProps>;
  children?: ReactNode;
  className?: string;
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
  preventFocusOnPress = true,
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

  const defaultElement = (
    <AriaButton {...props} preventFocusOnPress={preventFocusOnPress} className={buttonClassName}>
      {children}
    </AriaButton>
  );

  return resolveRender(render, renderProps, defaultElement);
}
