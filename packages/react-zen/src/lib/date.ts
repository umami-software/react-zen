import { CalendarDate } from '@internationalized/date';

export function toCalendarDate(date?: Date): CalendarDate | undefined {
  if (date) {
    return new CalendarDate(date.getFullYear(), date.getMonth() + 1, date.getDate());
  }
}
