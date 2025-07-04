import { ReactNode, useState } from 'react';
import {
  PopoverProps,
  Select as AriaSelect,
  SelectProps as AriaSelectProps,
  SelectValue,
  SelectValueRenderProps,
} from 'react-aria-components';
import classNames from 'classnames';
import { Chevron } from '@/components/icons';
import { Button, ButtonProps } from './Button';
import { Label } from './Label';
import { List, ListProps } from './List';
import { Popover } from './Popover';
import { Icon } from './Icon';
import { SearchField } from './SearchField';
import { Loading } from './Loading';
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
  onSearch,
  onSelectionChange,
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
    onSelectionChange?.(e);
    onChange?.(e);
  };

  const handleSearch = (value: string) => {
    setSearch(value);
    onSearch?.(value);
  };

  return (
    <AriaSelect
      aria-label="Select"
      {...props}
      className={classNames(styles.select, className)}
      selectedKey={value}
      defaultSelectedKey={defaultValue}
      onSelectionChange={handleChange}
    >
      {label && <Label>{label}</Label>}
      <Button
        variant="outline"
        {...buttonProps}
        className={classNames(styles.button, buttonProps?.className)}
      >
        <div className={styles.value}>
          <SelectValue>{renderValue}</SelectValue>
          <Icon aria-hidden="true" rotate={90} size="sm">
            <Chevron />
          </Icon>
        </div>
      </Button>
      <Popover {...popoverProps}>
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
          {isLoading && <Loading icon="dots" position="center" size="sm" />}
          <List
            {...listProps}
            items={items}
            style={{ ...listProps?.style, display: isLoading ? 'none' : undefined }}
          >
            {children}
          </List>
        </div>
      </Popover>
    </AriaSelect>
  );
}
