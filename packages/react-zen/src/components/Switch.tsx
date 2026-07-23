import { Switch as BaseSwitch } from '@base-ui/react/switch';
import type { ReactNode } from 'react';
import { Column } from './Column';
import { Label } from './Label';
import { cn } from './lib/tailwind';
import { switchVariant } from './variants';

export interface SwitchProps
  extends Omit<
    BaseSwitch.Root.Props,
    'checked' | 'defaultChecked' | 'disabled' | 'onCheckedChange'
  > {
  children?: ReactNode;
  label?: string;
  isSelected?: boolean;
  defaultSelected?: boolean;
  isDisabled?: boolean;
  onChange?: (selected: boolean) => void;
}

export function Switch({
  label,
  children,
  className,
  isSelected,
  defaultSelected,
  isDisabled,
  onChange,
  ...props
}: SwitchProps) {
  const styles = switchVariant();

  return (
    <Column>
      {label && <Label>{label}</Label>}
      <BaseSwitch.Root
        {...props}
        checked={isSelected}
        defaultChecked={defaultSelected}
        disabled={isDisabled}
        className={cn(styles.root(), className)}
        onCheckedChange={onChange}
      >
        <span className={styles.track()}>
          <BaseSwitch.Thumb className={styles.thumb()} />
        </span>
        {children}
      </BaseSwitch.Root>
    </Column>
  );
}
