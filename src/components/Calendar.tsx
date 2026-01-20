import { fromDate, getLocalTimeZone } from '@internationalized/date';
import {
  Calendar as AriaCalendar,
  type CalendarProps as AriaCalendarProps,
  CalendarCell,
  CalendarGrid,
  CalendarGridBody,
  CalendarGridHeader,
  CalendarHeaderCell,
  type DateValue,
  Heading,
} from 'react-aria-components';
import { ChevronRight } from '@/components/icons';
import { toCalendarDate } from '@/lib/date';
import { Button } from './Button';
import { Icon } from './Icon';
import { cn } from './lib/tailwind';
import { Row } from './Row';

export interface CalendarProps
  extends Omit<
    AriaCalendarProps<any>,
    'value' | 'minValue' | 'maxValue' | 'defaultValue' | 'onChange'
  > {
  value: Date;
  minValue?: Date;
  maxValue?: Date;
  defaultValue?: Date;
  onChange?: (date: Date) => void;
}

export function Calendar({
  className,
  value,
  minValue,
  maxValue,
  defaultValue,
  onChange,
  ...props
}: CalendarProps) {
  const handleChange = (date: DateValue) => {
    onChange?.(date.toDate(getLocalTimeZone()));
  };

  return (
    <AriaCalendar
      {...props}
      value={toCalendarDate(value)}
      minValue={toCalendarDate(minValue)}
      maxValue={toCalendarDate(maxValue)}
      defaultValue={toCalendarDate(defaultValue)}
      className={cn('w-fit max-w-full text-base', className)}
      onChange={handleChange}
    >
      <Row as="header" alignItems="center" marginBottom="4">
        <Button slot="previous" variant="quiet">
          <Icon rotate={180}>
            <ChevronRight />
          </Icon>
        </Button>
        <Heading className="flex-1 m-0 text-center text-base font-bold" />
        <Button slot="next" variant="quiet">
          <Icon>
            <ChevronRight />
          </Icon>
        </Button>
      </Row>
      <CalendarGrid>
        <CalendarGridHeader>
          {day => <CalendarHeaderCell className="font-bold">{day}</CalendarHeaderCell>}
        </CalendarGridHeader>
        <CalendarGridBody>
          {date => (
            <CalendarCell
              className={cn(
                'w-12 leading-[3rem] text-center rounded cursor-pointer outline-none m-0.5',
                'hover:bg-interactive',
                'data-[outside-month]:hidden',
                'data-[focus-visible]:outline-2 data-[focus-visible]:outline-focus-ring data-[focus-visible]:outline-offset-2',
                'data-[selected]:text-primary-foreground data-[selected]:bg-primary',
                'data-[disabled]:text-foreground-disabled',
              )}
              date={date}
            />
          )}
        </CalendarGridBody>
      </CalendarGrid>
    </AriaCalendar>
  );
}
