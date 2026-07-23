'use client';

import { Toggle as BaseToggle, type ToggleProps as BaseToggleProps } from '@base-ui/react/toggle';
import {
  ToggleGroup as BaseToggleGroup,
  type ToggleGroupProps as BaseToggleGroupProps,
} from '@base-ui/react/toggle-group';
import { Label } from './Label';
import type { Selection } from './lib/interaction';
import { cn } from './lib/tailwind';

export interface ToggleGroupProps
  extends Omit<
    BaseToggleGroupProps<string>,
    'value' | 'defaultValue' | 'onChange' | 'onValueChange'
  > {
  label?: string;
  value?: string[];
  defaultValue?: string[];
  variant?: 'primary';
  onChange?: (value: string[]) => void;
  selectionMode?: 'single' | 'multiple';
  selectedKeys?: Iterable<string>;
  defaultSelectedKeys?: Iterable<string>;
  onSelectionChange?: (value: Selection) => void;
}

export function ToggleGroup({
  label,
  value,
  defaultValue,
  variant,
  onChange,
  className,
  children,
  selectionMode = 'single',
  selectedKeys,
  defaultSelectedKeys,
  onSelectionChange,
  ...props
}: ToggleGroupProps) {
  const handleChange = (keys: string[]) => {
    onSelectionChange?.(new Set(keys));
    onChange?.(keys);
  };

  return (
    <>
      {label && <Label>{label}</Label>}
      <BaseToggleGroup
        {...props}
        value={value || (selectedKeys ? Array.from(selectedKeys) : undefined)}
        defaultValue={
          defaultValue || (defaultSelectedKeys ? Array.from(defaultSelectedKeys) : undefined)
        }
        multiple={selectionMode === 'multiple'}
        onValueChange={handleChange}
        className={cn(
          'bg-surface-base shadow-sm border border-edge rounded overflow-hidden',
          className,
        )}
      >
        {children}
      </BaseToggleGroup>
    </>
  );
}

export interface ToggleGroupItemProps extends Omit<BaseToggleProps<string>, 'disabled'> {
  id?: string;
  isDisabled?: boolean;
}

export function ToggleGroupItem({
  id,
  className,
  children,
  isDisabled,
  ...props
}: ToggleGroupItemProps) {
  return (
    <BaseToggle
      {...props}
      value={props.value || id}
      disabled={isDisabled}
      className={cn(
        'text-foreground-muted bg-surface-base font-bold flex items-center justify-center p-2 cursor-pointer outline-none',
        '[&:not(:first-child)]:border-l [&:not(:first-child)]:border-edge',
        'hover:bg-interactive',
        'data-[pressed]:text-foreground-primary data-[pressed]:bg-interactive',
        'data-[disabled]:text-foreground-disabled',
        className,
      )}
    >
      {children}
    </BaseToggle>
  );
}
