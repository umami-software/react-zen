import {
  Calendar,
  CalendarProps,
  CalendarCell,
  CalendarGrid,
  CalendarGridHeader,
  CalendarHeaderCell,
  CalendarGridBody,
  Heading,
} from 'react-aria-components';
import { HiChevronDown } from 'react-icons/hi2';
import classNames from 'classnames';
import Button from './Button';
import Icon from './Icon';
import styles from './Calendar.module.css';

function _Calendar({ className, ...props }: CalendarProps<any>) {
  return (
    <Calendar {...props} className={classNames(styles.calendar, className)}>
      <header className={styles.header}>
        <Button slot="previous" className={styles.button} variant="quiet">
          <Icon rotate={90}>
            <HiChevronDown />
          </Icon>
        </Button>
        <Heading className={styles.heading} />
        <Button slot="next" className={styles.button} variant="quiet">
          <Icon rotate={-90}>
            <HiChevronDown />
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
    </Calendar>
  );
}

export { _Calendar as Calendar };
export type { CalendarProps };

export default _Calendar;
