import type { ReactNode } from 'react';
import {
  ComboBox as AriaComboBox,
  type ComboBoxProps as AriaComboBoxProps,
  Button,
  Input,
  type ListBoxRenderProps,
  type PopoverProps,
} from 'react-aria-components';
import { Box } from '@/components/Box';
import { Grid } from '@/components/Grid';
import { Icon } from '@/components/Icon';
import { ChevronRight } from '@/components/icons';
import { List, ListItem, type ListProps } from '@/components/List';
import { Popover } from '@/components/Popover';
import { cn } from './lib/tailwind';

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
      className={cn('relative', className)}
    >
      <Grid alignItems="center" columns="1fr auto" width="100%">
        <Input
          className={cn(
            'flex-1 px-3 py-2 text-base rounded-l border border-edge bg-surface-base',
            'focus:outline-none focus:ring-2 focus:ring-focus-ring focus:border-transparent',
          )}
        />
        <Button
          className={cn(
            'px-2 py-2 border border-l-0 border-edge rounded-r bg-surface-raised',
            'hover:bg-interactive',
          )}
        >
          <Icon rotate={90} aria-hidden="true" size="sm">
            <ChevronRight />
          </Icon>
        </Button>
      </Grid>
      <Popover {...popoverProps}>
        <Box padding="1">
          <List items={items} renderEmptyState={renderEmptyState} {...listProps}>
            {children ||
              items?.map(item => (
                <ListItem key={item} textValue={item}>
                  {item}
                </ListItem>
              ))}
          </List>
        </Box>
      </Popover>
    </AriaComboBox>
  );
}
