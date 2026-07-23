import { Toggle as BaseToggle, type ToggleProps as BaseToggleProps } from '@base-ui/react/toggle';
import { Label } from './Label';
import { cn } from './lib/tailwind';

export interface ToggleProps
  extends Omit<
    BaseToggleProps<string>,
    'pressed' | 'defaultPressed' | 'disabled' | 'onChange' | 'onPressedChange'
  > {
  label?: string;
  value?: string;
  isSelected?: boolean;
  defaultSelected?: boolean;
  isDisabled?: boolean;
  onChange?: (selected: boolean) => void;
}

export function Toggle({
  label,
  children,
  className,
  isSelected,
  defaultSelected,
  isDisabled,
  onChange,
  ...props
}: ToggleProps) {
  return (
    <>
      {label && <Label>{label}</Label>}
      <BaseToggle
        {...props}
        pressed={isSelected}
        defaultPressed={defaultSelected}
        disabled={isDisabled}
        onPressedChange={onChange}
        className={cn(
          'flex items-center justify-center whitespace-nowrap gap-3 font-medium bg-interactive border border-transparent rounded p-2 relative cursor-pointer',
          'hover:bg-interactive-hover',
          'pressed:bg-interactive-pressed',
          'data-[pressed]:text-primary-foreground data-[pressed]:bg-primary',
          className,
        )}
      >
        {children}
      </BaseToggle>
    </>
  );
}
