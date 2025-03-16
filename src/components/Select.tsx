import { forwardRef, Ref } from 'react';
import classNames from 'classnames';
import {
  Button,
  PopoverProps,
  Select as AriaSelect,
  SelectProps as AriaSelectProps,
  SelectValue,
} from 'react-aria-components';
import { Column } from './Column';
import { Label } from './Label';
import { List, ListProps } from './List';
import { Popover } from './Popover';
import { Icon } from './Icon';
import { Icons } from './Icons';
import { Row } from './Row';
import { SearchField } from './SearchField';
import { Loading } from './Loading';
import inputStyles from './styles/input.module.css';
import styles from './Select.module.css';

interface SelectProps extends AriaSelectProps<HTMLSelectElement> {
  items?: any[];
  value?: string;
  label?: string;
  isLoading?: boolean;
  allowSearch?: boolean;
  searchDelay?: number;
  onSearch?: (value: string) => void;
  onChange?: (e: any) => void;
  listProps?: ListProps;
  popoverProps?: PopoverProps;
}

const Select = forwardRef(
  (
    {
      items = [],
      value,
      label,
      isLoading,
      allowSearch,
      searchDelay,
      onSearch,
      onSelectionChange,
      onChange,
      listProps,
      popoverProps,
      className,
      children,
      ...props
    }: SelectProps,
    ref: Ref<any>,
  ) => {
    const handleChange = (e: any) => {
      onSelectionChange?.(e);
      onChange?.(e);
    };

    return (
      <AriaSelect
        {...props}
        ref={ref}
        className={classNames(inputStyles.field, className)}
        onSelectionChange={handleChange}
      >
        {label && <Label>{label}</Label>}
        <Button className={classNames(inputStyles.input, className)}>
          <Row justifyContent="space-between" gap="3">
            <SelectValue />
            <span aria-hidden="true">
              <Icon rotate={90} size="xs" className={inputStyles.icon}>
                <Icons.Chevron />
              </Icon>
            </span>
          </Row>
        </Button>
        <Popover {...popoverProps}>
          <Column className={styles.popover}>
            {allowSearch && (
              <SearchField
                className={styles.search}
                onSearch={onSearch}
                delay={searchDelay}
                autoFocus
              />
            )}
            {isLoading && <Loading icon="dots" position="center" size="sm" />}
            <List
              {...listProps}
              className={classNames(styles.list, listProps?.className)}
              style={{ ...listProps?.style, display: isLoading ? 'none' : undefined }}
            >
              {children}
            </List>
          </Column>
        </Popover>
      </AriaSelect>
    );
  },
);

export { Select };
export type { SelectProps };
