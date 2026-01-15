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
import { Row } from './Row';
import { cn } from './lib/tailwind';

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
    console.log({ raw: date });
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
                'hover:bg-gray-100 dark:hover:bg-gray-800',
                'data-[outside-month]:hidden',
                'data-[focus-visible]:outline-2 data-[focus-visible]:outline-gray-900 dark:data-[focus-visible]:outline-gray-100 data-[focus-visible]:outline-offset-2',
                'data-[selected]:text-white data-[selected]:bg-gray-900 dark:data-[selected]:text-gray-900 dark:data-[selected]:bg-gray-100',
                'data-[disabled]:text-gray-300 dark:data-[disabled]:text-gray-600',
              )}
              date={date}
            />
          )}
        </CalendarGridBody>
      </CalendarGrid>
    </AriaCalendar>
  );
}
