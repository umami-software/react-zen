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
  box: '[&_.radio]:border [&_.radio]:rounded [&_.radio]:p-3 [&_.radio]:border-gray-300 dark:[&_.radio]:border-gray-700 [&_.radio[data-selected]]:border-gray-900 dark:[&_.radio[data-selected]]:border-gray-100',
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
        'before:content-[\'\'] before:w-4 before:h-4 before:rounded-full before:border-2 before:border-gray-400',
        'data-[selected]:before:border-gray-900 data-[selected]:before:bg-gray-900',
        'dark:data-[selected]:before:border-gray-100 dark:data-[selected]:before:bg-gray-100',
        'data-[disabled]:opacity-50 data-[disabled]:cursor-not-allowed',
        className,
      )}
    >
      {children}
    </AriaRadio>
  );
}
