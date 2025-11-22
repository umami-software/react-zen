import classNames from 'classnames';
import type { ReactNode } from 'react';
import {
  ComboBox as AriaComboBox,
  type ComboBoxProps as AriaComboBoxProps,
  Button,
  Input,
  type ListBoxRenderProps,
  Popover,
  type PopoverProps,
} from 'react-aria-components';
import { Grid } from '@/components/Grid';
import { Icon } from '@/components/Icon';
import { ChevronRight } from '@/components/icons';
import { List, ListItem, type ListProps } from '@/components/List';
import styles from './ComboBox.module.css';

export interface ComboBoxProps extends AriaComboBoxProps<any> {
  items?: any[];
  renderEmptyState?: (props: ListBoxRenderProps) => ReactNode;
  listProps?: ListProps;
  popoverProps?: PopoverProps;
}

export function ComboBox({
  items,
  className,
  renderEmptyState,
  listProps,
  popoverProps,
  children,
  ...props
}: ComboBoxProps) {
  return (
    <AriaComboBox
      aria-label="ComboBox"
      {...props}
      className={classNames(styles.combobox, className)}
    >
      <Grid alignItems="center" columns="1fr auto" width="100%">
        <Input className={styles.input} />
        <Button className={styles.button}>
          <Icon rotate={90} className={styles.icon} aria-hidden="true" size="sm">
            <ChevronRight />
          </Icon>
        </Button>
      </Grid>
      <Popover {...popoverProps}>
        <div className={styles.list}>
          <List items={items} renderEmptyState={renderEmptyState} {...listProps}>
            {children ||
              items?.map(item => (
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
