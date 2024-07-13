import classNames from 'classnames';
import {
  Button,
  Label,
  ListBox,
  ListBoxItem,
  Popover,
  Select,
  SelectValue,
} from 'react-aria-components';
import { HiChevronDown } from 'react-icons/hi2';
import List from './List';
import ListItem from './ListItem';
import styles from './Select.module.css';

export interface SelectProps {
  label: string;
  items: any[];
  value: string;
  className?: string;
}

export function _Select({ label, items = [], value, className, ...props }: SelectProps) {
  return (
    <Select {...props} className={classNames(styles.select, className)}>
      {label && <Label>{label}</Label>}
      <Button className={styles.button}>
        <SelectValue />
        <span aria-hidden="true">
          <HiChevronDown />
        </span>
      </Button>
      <Popover>
        <List items={items} className={styles.list}>
          {items.map(item => (
            <ListItem key={item} id={item} className={styles.item}>
              {item}
            </ListItem>
          ))}
        </List>
      </Popover>
    </Select>
  );
}

export { _Select as Select };

export default _Select;
