import {
  Calendar as AriaCalendar,
  CalendarProps,
  CalendarCell,
  CalendarGrid,
  CalendarGridHeader,
  CalendarHeaderCell,
  CalendarGridBody,
  Heading,
} from 'react-aria-components';
import classNames from 'classnames';
import { Button } from './Button';
import { Icon } from './Icon';
import { Icons } from './Icons';
import styles from './Calendar.module.css';

function Calendar({ className, ...props }: CalendarProps<any>) {
  return (
    <AriaCalendar {...props} className={classNames(styles.calendar, className)}>
      <header className={styles.header}>
        <Button slot="previous" className={styles.button} variant="quiet">
          <Icon rotate={180}>
            <Icons.Chevron />
          </Icon>
        </Button>
        <Heading className={styles.heading} />
        <Button slot="next" className={styles.button} variant="quiet">
          <Icon>
            <Icons.Chevron />
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

export { Calendar };
export type { CalendarProps };
