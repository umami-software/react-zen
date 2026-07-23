import type { CheckboxRoot } from '@base-ui/react/checkbox';
import { Checkbox as BaseCheckbox } from '@base-ui/react/checkbox';
import type { ReactNode } from 'react';
import { Check, Minus } from '@/components/icons';
import { Box } from './Box';
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
  label: _label,
  className,
  children,
  isSelected,
  defaultSelected,
  isDisabled,
  isIndeterminate,
  onChange,
  value,
  ...props
}: CheckboxProps) {
  const checked = isSelected ?? (typeof value === 'boolean' ? value : undefined);
  const styles = checkbox();

  return (
    <BaseCheckbox.Root
      {...props}
      value={typeof value === 'string' ? value : undefined}
      checked={checked}
      defaultChecked={defaultSelected}
      disabled={isDisabled}
      indeterminate={isIndeterminate}
      className={cn(styles.root(), className)}
      onCheckedChange={onChange}
    >
      <Box className={styles.box()}>
        <BaseCheckbox.Indicator
          className={styles.icon()}
          render={isIndeterminate ? <Minus /> : <Check />}
        />
      </Box>
      {children}
    </BaseCheckbox.Root>
  );
}
