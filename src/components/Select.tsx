import classNames from 'classnames';
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
import { Icon } from './Icon';
import { Label } from './Label';
import { List, type ListProps } from './List';
import { Loading } from './Loading';
import { Popover } from './Popover';
import { SearchField } from './SearchField';
import styles from './Select.module.css';

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
      className={classNames(styles.select, className)}
      value={value}
      defaultValue={defaultValue}
      onChange={handleChange}
    >
      {label && <Label>{label}</Label>}
      <Button
        variant="outline"
        {...buttonProps}
        className={classNames(styles.button, buttonProps?.className)}
      >
        <div className={styles.value}>
          <SelectValue>{renderValue}</SelectValue>
          <Icon rotate={90} aria-hidden="true" size="sm">
            <ChevronRight />
          </Icon>
        </div>
      </Button>
      <Popover {...popoverProps} onOpenChange={handleOpenChange} isFullscreen={isFullscreen}>
        <div className={styles.list}>
          {allowSearch && (
            <SearchField
              className={styles.search}
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
        </div>
      </Popover>
    </AriaSelect>
  );
}
