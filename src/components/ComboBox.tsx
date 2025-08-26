import {
  ComboBox as AriaComboBox,
  ComboBoxProps as AriaComboBoxProps,
  Input,
  Popover,
  Button,
  ListBox,
  ListBoxItem,
} from 'react-aria-components';
import classNames from 'classnames';
import { Chevron } from '@/components/icons';
import { List, ListItem } from './List';
import { Icon } from './Icon';
import { Row } from './Row';
import styles from './ComboBox.module.css';

export interface ComboboxProps extends AriaComboBoxProps<any> {
  items: any[];
  className?: string;
}

export function ComboBox({ items, className, ...props }: ComboboxProps) {
  return (
    <AriaComboBox {...props} className={classNames(styles.combobox, className)}>
      <Row alignItems="center">
        <Input className={styles.input} />
        <Button className={styles.button}>
          <Icon aria-hidden="true" rotate={90} size="sm">
            <Chevron />
          </Icon>
        </Button>
      </Row>
      <Popover>
        <div className={styles.list}>
          <List items={items}>
            {items.map(item => (
              <ListItem key={item} textValue={item}>
                {item}
              </ListItem>
            ))}
          </List>
        </div>
      </Popover>
    </AriaComboBox>
  );
}
