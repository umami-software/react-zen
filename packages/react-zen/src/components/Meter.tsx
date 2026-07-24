import { Meter as BaseMeter } from '@base-ui/react/meter';
import { Label } from './Label';
import { cn } from './lib/tailwind';
import { Text } from './Text';

export interface MeterProps extends Omit<BaseMeter.Root.Props, 'min' | 'max' | 'format'> {
  value: number;
  minValue?: number;
  maxValue?: number;
  label?: string;
  showValue?: boolean;
  formatOptions?: Intl.NumberFormatOptions;
}

export function Meter({
  value,
  minValue,
  maxValue,
  label,
  showValue,
  formatOptions,
  className,
  ...props
}: MeterProps) {
  return (
    <BaseMeter.Root
      {...props}
      value={value}
      min={minValue}
      max={maxValue}
      format={formatOptions}
      className={cn('flex flex-col gap-1 w-full', className)}
    >
      {(label || showValue) && (
        <div className="flex items-center justify-between gap-3">
          {label && <BaseMeter.Label render={<Label />}>{label}</BaseMeter.Label>}
          {showValue && (
            <Text className="tabular-nums">
              <BaseMeter.Value />
            </Text>
          )}
        </div>
      )}
      <BaseMeter.Track className="relative overflow-hidden w-full h-2 rounded-full bg-interactive">
        <BaseMeter.Indicator className="h-full rounded-full bg-primary transition-all" />
      </BaseMeter.Track>
    </BaseMeter.Root>
  );
}
