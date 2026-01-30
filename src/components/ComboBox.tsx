import type { ReactNode } from 'react';
import {
  Button as AriaButton,
  ComboBox as AriaComboBox,
  type ComboBoxProps as AriaComboBoxProps,
  Group as AriaGroup,
  Input as AriaInput,
  type ListBoxRenderProps,
  type PopoverProps,
} from 'react-aria-components';
import { Box } from '@/components/Box';
import { Icon } from '@/components/Icon';
import { ChevronRight } from '@/components/icons';
import { List, type ListProps } from '@/components/List';
import { Popover } from '@/components/Popover';
import { cn } from './lib/tailwind';

export interface ComboBoxProps extends AriaComboBoxProps<any> {
  children?: ReactNode;
  renderEmptyState?: (props: ListBoxRenderProps) => ReactNode;
  listProps?: ListProps;
  popoverProps?: PopoverProps;
}

export function ComboBox({
  className,
  renderEmptyState,
  listProps,
  popoverProps,
  children,
  ...props
}: ComboBoxProps) {
  return (
    <AriaComboBox aria-label="ComboBox" {...props} className={cn('relative', className)}>
      <AriaGroup
        className={cn(
          'flex items-center text-base border border-edge rounded bg-surface-base shadow-sm leading-6',
          'focus-within:border-edge-strong',
        )}
      >
        <AriaInput
          className={cn(
            'flex-1 py-2 px-3 bg-transparent border-none outline-none placeholder:text-foreground-muted',
          )}
        />
        <AriaButton
          className={cn(
            'flex items-center mr-3 text-foreground-muted hover:text-foreground-primary',
          )}
        >
          <Icon rotate={90} aria-hidden="true" size="sm">
            <ChevronRight />
          </Icon>
        </AriaButton>
      </AriaGroup>
      <Popover {...popoverProps}>
        <Box padding="2" border borderRadius="md" shadow="lg" className="bg-surface-overlay">
          <List renderEmptyState={renderEmptyState} {...listProps}>
            {children}
          </List>
        </Box>
      </Popover>
    </AriaComboBox>
  );
}
