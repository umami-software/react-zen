import { Radio as BaseRadio, type RadioRoot } from '@base-ui/react/radio';
import {
  RadioGroup as BaseRadioGroup,
  type RadioGroupProps as BaseRadioGroupProps,
} from '@base-ui/react/radio-group';
import type { ReactNode } from 'react';
import { Column } from './Column';
import { Label } from './Label';
import { cn } from './lib/tailwind';

export interface RadioGroupProps
  extends Omit<BaseRadioGroupProps, 'disabled' | 'readOnly' | 'onChange' | 'onValueChange'> {
  children?: ReactNode;
  label?: string;
  isDisabled?: boolean;
  isReadOnly?: boolean;
  onChange?: (value: string) => void;
}

export function RadioGroup({
  label,
  children,
  className,
  isDisabled,
  isReadOnly,
  onChange,
  ...props
}: RadioGroupProps) {
  return (
    <BaseRadioGroup
      aria-label="RadioGroup"
      {...props}
      disabled={isDisabled}
      readOnly={isReadOnly}
      onValueChange={onChange}
      className={cn('flex flex-col gap-2', className)}
    >
      {label && <Label>{label}</Label>}
      <Column gap="2">{children as ReactNode}</Column>
    </BaseRadioGroup>
  );
}

export interface RadioProps extends Omit<RadioRoot.Props, 'disabled'> {
  isDisabled?: boolean;
}

export function Radio({ children, className, isDisabled, ...props }: RadioProps) {
  return (
    <BaseRadio.Root
      aria-label="Radio"
      {...props}
      disabled={isDisabled}
      className={cn(
        'radio group flex items-center gap-3 cursor-pointer text-base',
        "before:content-[''] before:block before:w-5 before:h-5 before:box-border before:rounded-full",
        'before:border before:border-edge-strong before:bg-surface-base before:transition-all before:duration-200',
        'data-[checked]:before:border-[6px] data-[checked]:before:border-primary',
        'data-[disabled]:opacity-50 data-[disabled]:cursor-not-allowed',
        className,
      )}
    >
      {children}
    </BaseRadio.Root>
  );
}
