import { ReactNode } from 'react';
import classNames from 'classnames';
import { Button, Select, SelectValue } from 'react-aria-components';
import { List } from './List';
import ListItem from './ListItem';
import { Popover } from './Popover';
import { Icon } from './Icon';
import { Icons } from './Icons';
import styles from './Select.module.css';

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
          <Icon rotate={90} size="xs" className={styles.icon}>
            <Icons.Chevron />
          </Icon>
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
