import {
  Calendar as AriaCalendar,
  CalendarProps as AriaCalendarProps,
  CalendarCell,
  CalendarGrid,
  CalendarGridHeader,
  CalendarHeaderCell,
  CalendarGridBody,
  Heading,
  DateValue,
} from 'react-aria-components';
import classNames from 'classnames';
import { getLocalTimeZone, fromDate } from '@internationalized/date';
import { toCalendarDate } from '@/lib/date';
import { ChevronDown } from '@/components/icons';
import { Button } from './Button';
import { Icon } from './Icon';
import styles from './Calendar.module.css';

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
            <ChevronDown />
          </Icon>
        </Button>
        <Heading className={styles.heading} />
        <Button slot="next" className={styles.button} variant="quiet">
          <Icon>
            <ChevronDown />
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
