import { fromDate, getLocalTimeZone } from '@internationalized/date';
import classNames from 'classnames';
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
import styles from './Calendar.module.css';
import { Icon } from './Icon';

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
      className={classNames(styles.calendar, className)}
      onChange={handleChange}
    >
      <header className={styles.header}>
        <Button slot="previous" className={styles.button} variant="quiet">
          <Icon rotate={180}>
            <ChevronRight />
          </Icon>
        </Button>
        <Heading className={styles.heading} />
        <Button slot="next" className={styles.button} variant="quiet">
          <Icon>
            <ChevronRight />
          </Icon>
        </Button>
      </header>
      <CalendarGrid>
        <CalendarGridHeader>
          {day => <CalendarHeaderCell className={styles.headerCell}>{day}</CalendarHeaderCell>}
        </CalendarGridHeader>
        <CalendarGridBody className={styles.body}>
          {date => <CalendarCell className={styles.cell} date={date} />}
        </CalendarGridBody>
      </CalendarGrid>
    </AriaCalendar>
  );
}
