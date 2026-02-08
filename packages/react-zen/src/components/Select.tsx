import { type ReactNode, useState } from 'react';
import {
  Select as AriaSelect,
  type SelectProps as AriaSelectProps,
  type PopoverProps,
  SelectValue,
  type SelectValueRenderProps,
} from 'react-aria-components';
import { ChevronRight } from '@/components/icons';
import { Button, type ButtonProps } from './Button';
import { Column } from './Column';
import { Icon } from './Icon';
import { Label } from './Label';
import { List, type ListProps } from './List';
import { Loading } from './Loading';
import { cn } from './lib/tailwind';
import { Popover } from './Popover';
import { SearchField } from './SearchField';

export interface SelectProps extends AriaSelectProps<HTMLSelectElement> {
  children?: ReactNode;
  value?: string | number;
  defaultValue?: string | number;
  label?: string;
  placeholder?: string;
  isLoading?: boolean;
  allowSearch?: boolean;
  searchValue?: string;
  searchDelay?: number;
  isFullscreen?: boolean;
  maxHeight?: string | number;
  showIcon?: boolean;
  onSearch?: (value: string) => void;
  onChange?: (e: any) => void;
  buttonProps?: ButtonProps;
  listProps?: ListProps;
  popoverProps?: PopoverProps;
  renderValue?:
    | ReactNode
    | ((values: SelectValueRenderProps<object> & { defaultChildren: ReactNode }) => ReactNode);
}

export function Select({
  value,
  defaultValue,
  label,
  isLoading,
  allowSearch,
  searchValue,
  searchDelay,
  isFullscreen,
  maxHeight,
  showIcon = true,
  onSearch,
  onChange,
  buttonProps,
  listProps,
  popoverProps,
  renderValue,
  className,
  children,
  ...props
}: SelectProps) {
  const [search, setSearch] = useState('');

  const handleChange = (e: any) => {
    onChange?.(e);
  };

  const handleSearch = (value: string) => {
    setSearch(value);
    onSearch?.(value);
  };

  const handleOpenChange = () => {
    setSearch('');
    onSearch?.('');
  };

  return (
    <AriaSelect
      aria-label="Select"
      {...props}
      className={cn('flex flex-col gap-1', className)}
      value={value}
      defaultValue={defaultValue}
      onChange={handleChange}
    >
      {label && <Label>{label}</Label>}
      <Button
        variant="outline"
        {...buttonProps}
        className={cn('w-full justify-between', buttonProps?.className)}
      >
        <SelectValue>{renderValue}</SelectValue>
        {showIcon && (
          <Icon rotate={90} aria-hidden="true" size="sm">
            <ChevronRight />
          </Icon>
        )}
      </Button>
      <Popover {...popoverProps} onOpenChange={handleOpenChange} isFullscreen={isFullscreen}>
        <Column
          gap="2"
          padding="2"
          border
          borderRadius="md"
          shadow="lg"
          className="bg-surface-overlay"
        >
          {allowSearch && (
            <SearchField
              className="mb-2"
              value={search}
              onSearch={handleSearch}
              delay={searchDelay}
              defaultValue={searchValue}
              autoFocus
            />
          )}
          {isLoading && <Loading icon="dots" placement="center" size="sm" height="60px" />}
          <List
            {...listProps}
            isFullscreen={isFullscreen}
            {...(isFullscreen && {
              shouldSelectOnPressUp: true,
              shouldFocusOnHover: false,
              autoFocus: 'first',
            })}
            className={cn('overflow-auto', listProps?.className)}
            style={{ ...listProps?.style, maxHeight, display: isLoading ? 'none' : undefined }}
          >
            {children}
          </List>
        </Column>
      </Popover>
    </AriaSelect>
  );
}
