import { ReactNode, useState } from 'react';
import {
  PopoverProps,
  Select as AriaSelect,
  SelectProps as AriaSelectProps,
  SelectValue,
  SelectValueRenderProps,
} from 'react-aria-components';
import { Button, ButtonProps } from './Button';
import { Box } from './Box';
import { Column } from './Column';
import { Label } from './Label';
import { List, ListProps } from './List';
import { Popover } from './Popover';
import { Icon } from './Icon';
import { Chevron } from './icons';
import { Row } from './Row';
import { SearchField } from './SearchField';
import { Loading } from './Loading';

export interface SelectProps extends AriaSelectProps<HTMLSelectElement> {
  items?: any[];
  value?: string;
  defaultValue?: string;
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
      selectedKey={value}
      defaultSelectedKey={defaultValue}
      onSelectionChange={handleChange}
    >
      {label && <Label>{label}</Label>}
      <Button variant="outline" {...buttonProps}>
        <Row alignItems="center" justifyContent="space-between" gap="3">
          <SelectValue>{renderValue}</SelectValue>
          <Icon aria-hidden="true" rotate={90} size="sm">
            <Chevron />
          </Icon>
        </Row>
      </Button>
      <Popover {...popoverProps}>
        <Column>
          <Box padding="2" border borderRadius backgroundColor shadow="3">
            {allowSearch && (
              <Box marginBottom="2">
                <SearchField
                  value={search}
                  onSearch={handleSearch}
                  delay={searchDelay}
                  defaultValue={searchValue}
                  autoFocus
                />
              </Box>
            )}
            {isLoading && <Loading icon="dots" position="center" size="sm" />}
            <List
              {...listProps}
              items={items}
              style={{ ...listProps?.style, display: isLoading ? 'none' : undefined }}
            >
              {children}
            </List>
          </Box>
        </Column>
      </Popover>
    </AriaSelect>
  );
}
