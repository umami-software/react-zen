import { ComboBox, ComboBoxProps, Input, Button } from 'react-aria-components';
import classNames from 'classnames';
import List from './List';
import ListItem from './ListItem';
import Icon from './Icon';
import Popover from './Popover';
import Icons from './Icons';
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
          <Icon rotate={90} size="xs" className={styles.icon}>
            <Icons.Chevron />
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
