import { Select as BaseSelect } from '@base-ui/react/select';
import { type ReactNode, useState } from 'react';
import { ChevronRight } from '@/components/icons';
import { Button, type ButtonProps } from './Button';
import { Column } from './Column';
import { Icon } from './Icon';
import { Label } from './Label';
import { List, ListItem, ListPrimitiveProvider, type ListProps } from './List';
import { Loading } from './Loading';
import { cn } from './lib/tailwind';
import { SearchField } from './SearchField';

export interface SelectValueRenderProps {
  defaultChildren: ReactNode;
  isPlaceholder: boolean;
}

export interface SelectProps
  extends Omit<
    BaseSelect.Root.Props<string | number>,
    'children' | 'value' | 'defaultValue' | 'items' | 'disabled' | 'onValueChange'
  > {
  children?: ReactNode;
  items?: ReadonlyArray<string | number | { label: ReactNode; value: string | number }>;
  value?: string | number;
  defaultValue?: string | number;
  label?: string;
  placeholder?: string;
  isLoading?: boolean;
  isDisabled?: boolean;
  allowSearch?: boolean;
  searchValue?: string;
  searchDelay?: number;
  isFullscreen?: boolean;
  maxHeight?: string | number;
  showIcon?: boolean;
  alignItemWithTrigger?: boolean;
  onSearch?: (value: string) => void;
  onChange?: (value: string | number | null) => void;
  buttonProps?: ButtonProps;
  listProps?: ListProps;
  popoverProps?: BaseSelect.Positioner.Props;
  renderValue?: ReactNode | ((values: SelectValueRenderProps) => ReactNode);
  className?: string;
}

export function Select({
  value,
  defaultValue,
  label,
  placeholder,
  isLoading,
  isDisabled,
  allowSearch,
  searchValue,
  searchDelay,
  isFullscreen,
  maxHeight,
  showIcon = true,
  alignItemWithTrigger = false,
  onSearch,
  onChange,
  buttonProps,
  listProps,
  popoverProps,
  renderValue,
  className,
  children,
  items,
  onOpenChange,
  ...props
}: SelectProps) {
  const [search, setSearch] = useState('');
  const normalizedItems = items?.map(item =>
    typeof item === 'object' ? item : { label: String(item), value: item },
  );
  const collection =
    children ||
    normalizedItems?.map(item => (
      <ListItem key={item.value} value={String(item.value)}>
        {item.label}
      </ListItem>
    ));

  return (
    <div className={cn('flex flex-col gap-1', className)}>
      <BaseSelect.Root
        {...props}
        items={normalizedItems}
        value={value}
        defaultValue={defaultValue}
        disabled={isDisabled}
        onValueChange={onChange}
        onOpenChange={(open, details) => {
          if (!open) {
            setSearch('');
            onSearch?.('');
          }
          onOpenChange?.(open, details);
        }}
      >
        {label && <Label>{label}</Label>}
        <BaseSelect.Trigger
          render={
            <Button
              variant="outline"
              {...buttonProps}
              className={cn('w-full justify-between', buttonProps?.className)}
            />
          }
        >
          <BaseSelect.Value placeholder={placeholder}>
            {selected => {
              const defaultChildren = selected ?? placeholder;
              return typeof renderValue === 'function'
                ? renderValue({
                    defaultChildren,
                    isPlaceholder: selected == null,
                  })
                : renderValue || defaultChildren;
            }}
          </BaseSelect.Value>
          {showIcon && (
            <Icon rotate={90} aria-hidden="true" size="sm">
              <ChevronRight />
            </Icon>
          )}
        </BaseSelect.Trigger>
        <BaseSelect.Portal>
          <BaseSelect.Positioner
            align="start"
            sideOffset={4}
            alignItemWithTrigger={alignItemWithTrigger}
            {...popoverProps}
          >
            <BaseSelect.Popup
              className={cn(
                'bg-surface-overlay border border-edge rounded-md shadow-lg outline-none',
                isFullscreen && 'fixed inset-0 rounded-none z-[9999]',
              )}
            >
              <Column gap="2" padding="2">
                {allowSearch && (
                  <SearchField
                    className="mb-2"
                    value={search}
                    onChange={setSearch}
                    onSearch={value => {
                      setSearch(value);
                      onSearch?.(value);
                    }}
                    delay={searchDelay}
                    defaultValue={searchValue}
                    autoFocus
                  />
                )}
                {isLoading && <Loading icon="dots" placement="center" size="sm" height="60px" />}
                <ListPrimitiveProvider kind="select">
                  <List
                    {...listProps}
                    isFullscreen={isFullscreen}
                    className={cn('overflow-auto', listProps?.className)}
                    style={{
                      ...listProps?.style,
                      maxHeight,
                      display: isLoading ? 'none' : undefined,
                    }}
                  >
                    {collection}
                  </List>
                </ListPrimitiveProvider>
              </Column>
            </BaseSelect.Popup>
          </BaseSelect.Positioner>
        </BaseSelect.Portal>
      </BaseSelect.Root>
    </div>
  );
}
