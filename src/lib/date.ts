import { CalendarDate, getLocalTimeZone } from '@internationalized/date';

export function toCalendarDate(date?: CalendarDate | Date): CalendarDate | undefined {
  if (date instanceof CalendarDate) {
    return date;
  }

  return date
    ? new CalendarDate(date.getUTCFullYear(), date.getUTCMonth() + 1, date.getUTCDate())
    : date;
}

export function fromCalendarDate(date?: CalendarDate | Date): Date | undefined {
  if (date instanceof CalendarDate) {
    return date.toDate(getLocalTimeZone());
  }

  return date;
}
