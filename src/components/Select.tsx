import { forwardRef, Ref } from 'react';
import classNames from 'classnames';
import {
  Button,
  Select as AriaSelect,
  SelectProps as AriaSelectProps,
  SelectValue,
} from 'react-aria-components';
import { Column } from '@/components/Column';
import { Label } from '@/components/Label';
import { List, ListProps } from '@/components/List';
import { Popover } from '@/components/Popover';
import { Icon } from '@/components/Icon';
import { Icons } from '@/components/Icons';
import { Row } from '@/components/Row';
import { SearchField } from '@/components/SearchField';
import { Loading } from '@/components/Loading';
import inputStyles from '@/components/styles/input.module.css';
import styles from '@/components/Select.module.css';

interface SelectProps extends AriaSelectProps<HTMLSelectElement> {
  items?: any[];
  value?: string;
  label?: string;
  listHeight?: string;
  listWidth?: string;
  isLoading?: boolean;
  allowSearch?: boolean;
  searchDelay?: number;
  onSearch?: (value: string) => void;
  onChange?: (e: any) => void;
  listProps?: ListProps;
}

const Select = forwardRef(
  (
    {
      items = [],
      value,
      label,
      isLoading,
      listWidth,
      listHeight,
      listProps,
      allowSearch,
      searchDelay,
      onSearch,
      onSelectionChange,
      onChange,
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
        <Popover>
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
              items={items}
              className={classNames(styles.list, listProps?.className)}
              style={{ display: isLoading ? 'none' : undefined }}
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
