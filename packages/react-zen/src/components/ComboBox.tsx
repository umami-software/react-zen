import { Combobox as BaseCombobox } from '@base-ui/react/combobox';
import type { ReactNode } from 'react';
import { Icon } from '@/components/Icon';
import { ChevronRight } from '@/components/icons';
import { List, ListItem, ListPrimitiveProvider, type ListProps } from '@/components/List';
import { cn } from './lib/tailwind';

export interface ComboBoxProps
  extends Omit<
    BaseCombobox.Root.Props<string>,
    'children' | 'items' | 'disabled' | 'onValueChange'
  > {
  children?: ReactNode;
  items?: ReadonlyArray<string | { label: ReactNode; value: string }>;
  label?: string;
  placeholder?: string;
  isDisabled?: boolean;
  onChange?: (value: string | null) => void;
  renderEmptyState?: (props: object) => ReactNode;
  listProps?: ListProps;
  popoverProps?: BaseCombobox.Positioner.Props;
  className?: string;
}

export function ComboBox({
  className,
  label,
  placeholder,
  isDisabled,
  onChange,
  renderEmptyState,
  listProps,
  popoverProps,
  children,
  items,
  ...props
}: ComboBoxProps) {
  const normalizedItems = items?.map(item =>
    typeof item === 'object' ? item : { label: item, value: item },
  );
  const collection =
    children ||
    normalizedItems?.map(item => (
      <ListItem key={item.value} value={item.value}>
        {item.label}
      </ListItem>
    ));

  return (
    <BaseCombobox.Root
      {...props}
      items={normalizedItems}
      disabled={isDisabled}
      onValueChange={onChange}
    >
      <div className={cn('relative', className)}>
        {label && (
          <BaseCombobox.Label className="text-base font-semibold">{label}</BaseCombobox.Label>
        )}
        <BaseCombobox.InputGroup
          className={cn(
            'flex items-center text-base border border-edge rounded bg-surface-base shadow-sm leading-6',
            'focus-within:border-edge-strong',
          )}
        >
          <BaseCombobox.Input
            placeholder={placeholder}
            className="flex-1 py-2 px-3 bg-transparent border-none outline-none placeholder:text-foreground-muted"
          />
          <BaseCombobox.Trigger className="flex items-center mr-3 text-foreground-muted hover:text-foreground-primary">
            <Icon rotate={90} aria-hidden="true" size="sm">
              <ChevronRight />
            </Icon>
          </BaseCombobox.Trigger>
        </BaseCombobox.InputGroup>
        <BaseCombobox.Portal>
          <BaseCombobox.Positioner {...popoverProps}>
            <BaseCombobox.Popup className="p-2 border border-edge rounded-md shadow-lg bg-surface-overlay outline-none">
              <ListPrimitiveProvider kind="combobox">
                <List {...listProps}>{collection}</List>
              </ListPrimitiveProvider>
              {renderEmptyState && <BaseCombobox.Empty>{renderEmptyState({})}</BaseCombobox.Empty>}
            </BaseCombobox.Popup>
          </BaseCombobox.Positioner>
        </BaseCombobox.Portal>
      </div>
    </BaseCombobox.Root>
  );
}
