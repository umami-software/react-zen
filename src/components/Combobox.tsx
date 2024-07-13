import {
  ComboBox,
  ComboBoxProps,
  Input,
  Popover,
  Button,
  ListBox,
  ListBoxItem,
} from 'react-aria-components';
import { HiChevronDown } from 'react-icons/hi2';
import List from './List';
import ListItem from './ListItem';
import styles from './Combobox.module.css';
import classNames from 'classnames';
import Icon from '@/components/Icon';

export interface ComboboxProps extends ComboBoxProps<any> {
  items: any[];
  className?: string;
}

export function Combobox({ items, className, ...props }: ComboboxProps) {
  return (
    <ComboBox {...props} className={classNames(styles.combobox, className)}>
      <div className={styles.field}>
        <Input className={styles.input} />
        <Button className={styles.button}>
          <HiChevronDown />
        </Button>
      </div>
      <Popover>
        <List items={items}>
          {items.map(item => (
            <ListItem key={item} textValue={item}>
              {item}
            </ListItem>
          ))}
        </List>
      </Popover>
    </ComboBox>
  );
}

export default Combobox;
