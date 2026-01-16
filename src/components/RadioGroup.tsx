import type { ReactNode } from 'react';
import {
  Radio as AriaRadio,
  RadioGroup as AriaRadioGroup,
  type RadioGroupProps as AriaRadioGroupProps,
  type RadioProps,
} from 'react-aria-components';
import { Column } from './Column';
import { Label } from './Label';
import { cn } from './lib/tailwind';

export interface RadioGroupProps extends AriaRadioGroupProps {
  label?: string;
}

export function RadioGroup({ label, children, className, ...props }: RadioGroupProps) {
  return (
    <AriaRadioGroup
      aria-label="RadioGroup"
      {...props}
      className={cn('flex flex-col gap-2', className)}
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
        "before:content-[''] before:w-5 before:h-5 before:rounded-full before:border before:border-edge-strong",
        'data-[selected]:before:border-interactive-selected data-[selected]:before:bg-surface-base data-[selected]:before:shadow-[inset_0_0_0_5px_var(--interactive-bg-selected)]',
        'data-[disabled]:opacity-50 data-[disabled]:cursor-not-allowed',
        className,
      )}
    >
      {children}
    </AriaRadio>
  );
}
