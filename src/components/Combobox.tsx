import { ComboBox, ComboBoxProps, Input, Button } from 'react-aria-components';
import { HiChevronDown } from 'react-icons/hi2';
import classNames from 'classnames';
import List from './List';
import ListItem from './ListItem';
import Icon from './Icon';
import Popover from './Popover';
import styles from './Combobox.module.css';

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
          <Icon size={1}>
            <HiChevronDown />
          </Icon>
        </Button>
      </div>
      <Popover>
        <List items={items} className={styles.list}>
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
