import { ReactNode } from 'react';
import classNames from 'classnames';
import {
  Button,
  Select as AriaSelect,
  SelectProps as AriaSelectProps,
  SelectValue,
  Label,
} from 'react-aria-components';
import { List } from './List';
import { ListItem } from './ListItem';
import { Popover } from './Popover';
import { Icon } from './Icon';
import { Icons } from './Icons';
import { Row } from './Row';
import inputStyles from './Input.module.css';
import styles from './Select.module.css';

interface SelectProps extends AriaSelectProps<HTMLSelectElement> {
  items: any[];
  value: string;
  label?: string;
}

function Select({ children, items = [], value, label, className, ...props }: SelectProps) {
  return (
    <AriaSelect {...props} className={classNames(inputStyles.field, className)}>
      {label && <Label className={inputStyles.label}>{label}</Label>}
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
}

export { Select };
export type { SelectProps };
