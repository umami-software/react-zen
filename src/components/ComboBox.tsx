import { ReactNode } from 'react';
import {
  ComboBox as AriaComboBox,
  ComboBoxProps as AriaComboBoxProps,
  Input,
  Popover,
  Button,
  ListBoxRenderProps,
  PopoverProps,
} from 'react-aria-components';
import classNames from 'classnames';
import { Chevron } from '@/components/icons';
import { List, ListItem, ListProps } from '@/components/List';
import { Icon } from '@/components/Icon';
import { Grid } from '@/components/Grid';
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
          <Icon aria-hidden="true" rotate={90} size="sm">
            <Chevron />
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
