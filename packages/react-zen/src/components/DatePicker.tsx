import { useState } from 'react';
import { CalendarDays } from '@/components/icons';
import { Button, type ButtonProps } from './Button';
import { Calendar, type CalendarProps } from './Calendar';
import { Icon } from './Icon';
import { Label } from './Label';
import { cn } from './lib/tailwind';
import { DialogTrigger } from './OverlayTrigger';
import { Popover } from './Popover';

export interface DatePickerProps {
  value?: Date;
  defaultValue?: Date;
  minValue?: Date;
  maxValue?: Date;
  label?: string;
  placeholder?: string;
  locale?: string;
  isDisabled?: boolean;
  isReadOnly?: boolean;
  formatOptions?: Intl.DateTimeFormatOptions;
  onChange?: (date: Date) => void;
  buttonProps?: ButtonProps;
  calendarProps?: Partial<CalendarProps>;
  className?: string;
}

export function DatePicker({
  value,
  defaultValue,
  minValue,
  maxValue,
  label,
  placeholder = 'Select date',
  locale,
  isDisabled,
  isReadOnly,
  formatOptions = { dateStyle: 'medium' },
  onChange,
  buttonProps,
  calendarProps,
  className,
}: DatePickerProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [uncontrolledValue, setUncontrolledValue] = useState<Date | undefined>(defaultValue);
  const date = value ?? uncontrolledValue;

  const handleChange = (nextDate: Date) => {
    if (value === undefined) {
      setUncontrolledValue(nextDate);
    }
    onChange?.(nextDate);
    setIsOpen(false);
  };

  return (
    <div className={cn('flex flex-col gap-1', className)}>
      {label && <Label>{label}</Label>}
      <DialogTrigger isOpen={isOpen} onOpenChange={setIsOpen}>
        <Button
          variant="outline"
          isDisabled={isDisabled}
          {...buttonProps}
          className={cn('justify-start gap-3 font-normal', buttonProps?.className)}
        >
          <Icon size="sm">
            <CalendarDays />
          </Icon>
          {date ? (
            new Intl.DateTimeFormat(locale, formatOptions).format(date)
          ) : (
            <span className="text-foreground-muted">{placeholder}</span>
          )}
        </Button>
        <Popover>
          <Calendar
            {...calendarProps}
            value={date as Date}
            minValue={minValue}
            maxValue={maxValue}
            isReadOnly={isReadOnly}
            onChange={handleChange}
          />
        </Popover>
      </DialogTrigger>
    </div>
  );
}
