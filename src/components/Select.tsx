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
import { Row } from './Row';
import { SearchField } from './SearchField';

export interface SelectProps extends AriaSelectProps<HTMLSelectElement> {
  items?: any[];
  value?: string | number;
  defaultValue?: string | number;
  label?: string;
  isLoading?: boolean;
  allowSearch?: boolean;
  searchValue?: string;
  searchDelay?: number;
  isFullscreen?: boolean;
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
  items = [],
  value,
  defaultValue,
  label,
  isLoading,
  allowSearch,
  searchValue,
  searchDelay,
  isFullscreen,
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
      <Button variant="outline" {...buttonProps} className={cn('w-full', buttonProps?.className)}>
        <Row flexGrow={1} alignItems="center" justifyContent="space-between">
          <SelectValue>{renderValue}</SelectValue>
          <Icon rotate={90} aria-hidden="true" size="sm">
            <ChevronRight />
          </Icon>
        </Row>
      </Button>
      <Popover {...popoverProps} onOpenChange={handleOpenChange} isFullscreen={isFullscreen}>
        <Column gap="2" className="border border-edge rounded-md shadow-lg bg-surface-overlay p-2">
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
            items={items}
            isFullscreen={isFullscreen}
            {...(isFullscreen && {
              shouldSelectOnPressUp: true,
              shouldFocusOnHover: false,
              autoFocus: 'first',
            })}
            style={{ ...listProps?.style, display: isLoading ? 'none' : undefined }}
          >
            {children}
          </List>
        </Column>
      </Popover>
    </AriaSelect>
  );
}
