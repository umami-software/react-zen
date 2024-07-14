import classNames from 'classnames';
import { Button, Popover, Select, SelectValue } from 'react-aria-components';
import { HiChevronDown } from 'react-icons/hi2';
import List from './List';
import ListItem from './ListItem';
import styles from './Select.module.css';
import { ReactNode } from 'react';

export interface SelectProps {
  items: any[];
  value: string;
  className?: string;
  children?: ReactNode;
}

export function _Select({ children, items = [], value, className, ...props }: SelectProps) {
  return (
    <Select {...props} className={classNames(styles.select, className)}>
      <Button className={styles.button}>
        <SelectValue />
        <span aria-hidden="true">
          <HiChevronDown />
        </span>
      </Button>
      <Popover>
        <List items={items} className={styles.list}>
          {children ||
            items.map(item => (
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
