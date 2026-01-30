'use client';

import {
  type Selection,
  Tag,
  TagGroup,
  type TagGroupProps,
  TagList,
  type TagProps,
} from 'react-aria-components';
import { Label } from './Label';
import { cn } from './lib/tailwind';

export interface ToggleGroupProps extends TagGroupProps {
  label?: string;
  value?: string[];
  defaultValue?: string[];
  variant?: 'primary';
  onChange?: (value: string[]) => void;
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
  const handleChange = (keys: Selection) => {
    onSelectionChange?.(keys);
    onChange?.(Array.from(keys).map(k => k.toString()));
  };

  return (
    <TagGroup
      {...props}
      selectedKeys={value || selectedKeys}
      defaultSelectedKeys={defaultValue || defaultSelectedKeys}
      selectionMode={selectionMode}
      onSelectionChange={handleChange}
      className={cn(
        'bg-surface-base shadow-sm border border-edge rounded overflow-hidden',
        className,
      )}
    >
      {label && <Label>{label}</Label>}
      <TagList className="flex flex-row items-center">{children}</TagList>
    </TagGroup>
  );
}

export interface ToggleGroupItemProps extends TagProps {}

export function ToggleGroupItem({ className, children, ...props }: ToggleGroupItemProps) {
  return (
    <Tag
      {...props}
      className={cn(
        'text-foreground-muted bg-surface-base font-bold flex items-center justify-center p-2 cursor-pointer outline-none',
        '[&:not(:first-child)]:border-l [&:not(:first-child)]:border-edge',
        'hover:bg-interactive',
        'data-[selected]:text-foreground-primary data-[selected]:bg-interactive',
        'data-[disabled]:text-foreground-disabled',
        className,
      )}
    >
      {children}
    </Tag>
  );
}
