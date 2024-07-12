import classnames from 'classnames';
import * as RadixSelect from '@radix-ui/react-select';
import { CheckIcon, ChevronDownIcon, ChevronUpIcon } from '@radix-ui/react-icons';
import {
  Button,
  Label,
  ListBox,
  ListBoxItem,
  Popover,
  Select,
  SelectValue,
} from 'react-aria-components';
import styles from './Select.module.css';

export interface SelectProps {
  label: string;
  items: any[];
  value: string;
  placeholder?: string;
}

export function ZenSelect({ label, items = [], value, placeholder }: SelectProps) {
  return (
    <Select placeholder={placeholder}>
      {label && <Label>{label}</Label>}
      <Button className={styles.button}>
        <SelectValue />
        <span aria-hidden="true">
          <ChevronDownIcon />
        </span>
      </Button>
      <Popover>
        <ListBox items={items} className={styles.list}>
          {items.map(item => (
            <ListBoxItem key={item} id={item} className={styles.item}>
              {item}
            </ListBoxItem>
          ))}
        </ListBox>
      </Popover>
    </Select>
  );
}

export default ZenSelect;
