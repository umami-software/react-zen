import { ReactNode } from 'react';
import {
  RadioGroup as AriaRadioGroup,
  RadioGroupProps as AriaRadioGroupProps,
  Radio as AriaRadio,
  RadioProps,
} from 'react-aria-components';
import { Column } from './Column';
import { Label } from './Label';
import { cn } from './lib/tailwind';

export interface RadioGroupProps extends AriaRadioGroupProps {
  label?: string;
  variant?: 'circle' | 'box';
}

const variantClasses = {
  circle: '',
  box: '[&_.radio]:border [&_.radio]:rounded [&_.radio]:p-3 [&_.radio]:border-edge [&_.radio[data-selected]]:border-edge-inverted',
};

export function RadioGroup({
  variant = 'circle',
  label,
  children,
  className,
  ...props
}: RadioGroupProps) {
  return (
    <AriaRadioGroup
      aria-label="RadioGroup"
      {...props}
      className={cn('flex flex-col gap-2', variantClasses[variant], className)}
    >
      {label && <Label>{label}</Label>}
      <Column gap="2">{children as ReactNode}</Column>
    </AriaRadioGroup>
  );
}

export type { RadioProps };

export function Radio({ children, className, ...props }: RadioProps) {
  return (
    <AriaRadio
      aria-label="Radio"
      {...props}
      className={cn(
        'radio group flex items-center gap-3 cursor-pointer text-base',
        'before:content-[\'\'] before:w-4 before:h-4 before:rounded-full before:border-2 before:border-edge-strong',
        'data-[selected]:before:border-interactive-selected data-[selected]:before:bg-interactive-selected',
        'data-[disabled]:opacity-50 data-[disabled]:cursor-not-allowed',
        className,
      )}
    >
      {children}
    </AriaRadio>
  );
}
