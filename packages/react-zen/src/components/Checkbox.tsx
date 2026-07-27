import type { CheckboxRoot } from '@base-ui/react/checkbox';
import { Checkbox as BaseCheckbox } from '@base-ui/react/checkbox';
import { type ReactNode, useContext } from 'react';
import { Check, Minus } from '@/components/icons';
import { Box } from './Box';
import { Icon } from './Icon';
import { TableSelectionContext, TableSelectionScopeContext } from './lib/tableSelection';
import { cn } from './lib/tailwind';
import { checkbox } from './variants';

export interface CheckboxProps
  extends Omit<
    CheckboxRoot.Props,
    'checked' | 'defaultChecked' | 'disabled' | 'indeterminate' | 'onCheckedChange' | 'value'
  > {
  children?: ReactNode;
  label?: string;
  value?: string | boolean;
  isSelected?: boolean;
  defaultSelected?: boolean;
  isDisabled?: boolean;
  isIndeterminate?: boolean;
  onChange?: (selected: boolean) => void;
}

export function Checkbox({
  label,
  className,
  children,
  isSelected,
  defaultSelected,
  isDisabled,
  isIndeterminate,
  onChange,
  value,
  slot,
  ...props
}: CheckboxProps) {
  const tableSelection = useContext(TableSelectionContext);
  const tableScope = useContext(TableSelectionScopeContext);
  const isTableSelection = slot === 'selection' && tableSelection !== null && tableScope !== null;
  const isHeaderSelection = isTableSelection && tableScope.type === 'header';
  const selectedRowCount = tableSelection
    ? Array.from(tableSelection.rowKeys).filter(key => tableSelection.selectedKeys.has(key)).length
    : 0;
  const tableChecked = isHeaderSelection
    ? tableSelection.rowKeys.size > 0 && selectedRowCount === tableSelection.rowKeys.size
    : tableScope?.rowKey
      ? tableSelection?.selectedKeys.has(tableScope.rowKey)
      : undefined;
  const tableIndeterminate =
    isHeaderSelection && selectedRowCount > 0 && selectedRowCount < tableSelection.rowKeys.size;
  const checked =
    (isTableSelection ? tableChecked : undefined) ??
    isSelected ??
    (typeof value === 'boolean' ? value : undefined);
  const styles = checkbox();

  return (
    <BaseCheckbox.Root
      {...props}
      aria-label={props['aria-label'] ?? label}
      value={typeof value === 'string' ? value : undefined}
      checked={checked}
      defaultChecked={defaultSelected}
      disabled={
        isDisabled ||
        (isTableSelection &&
          (tableSelection.selectionMode === 'none' ||
            (isHeaderSelection && tableSelection.selectionMode !== 'multiple')))
      }
      indeterminate={isTableSelection ? tableIndeterminate : isIndeterminate}
      className={cn(styles.root(), className)}
      slot={isTableSelection ? undefined : slot}
      onCheckedChange={selected => {
        onChange?.(selected);
        if (!isTableSelection) {
          return;
        }
        if (isHeaderSelection) {
          tableSelection.setAllSelected(selected);
        } else if (tableScope.rowKey) {
          tableSelection.setRowSelected(tableScope.rowKey, selected);
        }
      }}
    >
      <Box className={styles.box()}>
        <BaseCheckbox.Indicator className={styles.icon()}>
          <Icon size="sm">
            {(isTableSelection ? tableIndeterminate : isIndeterminate) ? <Minus /> : <Check />}
          </Icon>
        </BaseCheckbox.Indicator>
      </Box>
      {children}
    </BaseCheckbox.Root>
  );
}
