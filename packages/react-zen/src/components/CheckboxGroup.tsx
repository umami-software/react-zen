import { CheckboxGroup as BaseCheckboxGroup } from '@base-ui/react/checkbox-group';
import { type ReactNode, useId } from 'react';
import { Label } from './Label';
import { cn } from './lib/tailwind';

export interface CheckboxGroupProps
  extends Omit<BaseCheckboxGroup.Props, 'disabled' | 'onValueChange' | 'onChange'> {
  label?: string;
  isDisabled?: boolean;
  orientation?: 'vertical' | 'horizontal';
  onChange?: (value: string[]) => void;
  children?: ReactNode;
}

export function CheckboxGroup({
  label,
  isDisabled,
  orientation = 'vertical',
  onChange,
  className,
  children,
  ...props
}: CheckboxGroupProps) {
  const labelId = useId();

  return (
    <div className={cn('flex flex-col gap-2', className)}>
      {label && <Label id={labelId}>{label}</Label>}
      <BaseCheckboxGroup
        {...props}
        aria-labelledby={label ? labelId : props['aria-labelledby']}
        disabled={isDisabled}
        onValueChange={value => onChange?.(value)}
        className={cn('flex gap-3', orientation === 'vertical' ? 'flex-col' : 'flex-row flex-wrap')}
      >
        {children}
      </BaseCheckboxGroup>
    </div>
  );
}
