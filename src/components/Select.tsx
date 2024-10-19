import { forwardRef, Ref } from 'react';
import classNames from 'classnames';
import {
  Button,
  Select as AriaSelect,
  SelectProps as AriaSelectProps,
  SelectValue,
} from 'react-aria-components';
import { Label } from './Label';
import { List } from './List';
import { Popover } from './Popover';
import { Icon } from './Icon';
import { Icons } from './Icons';
import { Row } from './Row';
import inputStyles from './Input.module.css';
import styles from './Select.module.css';

interface SelectProps extends AriaSelectProps<HTMLSelectElement> {
  items: any[];
  value?: string;
  label?: string;
  onChange?: (e: any) => void;
}

const Select = forwardRef(
  (
    {
      children,
      items = [],
      value,
      label,
      className,
      onSelectionChange,
      onChange,
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
          <Row justifyContent="space-between" gap="md">
            <SelectValue />
            <span aria-hidden="true">
              <Icon rotate={90} size="xs" className={inputStyles.icon}>
                <Icons.Chevron />
              </Icon>
            </span>
          </Row>
        </Button>
        <Popover>
          <List items={items} className={styles.list}>
            {children as any}
          </List>
        </Popover>
      </AriaSelect>
    );
  },
);

export { Select };
export type { SelectProps };
