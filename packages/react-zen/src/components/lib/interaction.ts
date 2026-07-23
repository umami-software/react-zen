import type { Key, MouseEvent } from 'react';

export type Selection = Set<Key> | 'all';
export type PressEvent = MouseEvent<HTMLElement>;

export function toSelection(value?: Iterable<Key> | 'all'): Selection {
  return value === 'all' ? 'all' : new Set(value);
}

export function selectionToStrings(value: Selection): string[] {
  return value === 'all' ? [] : Array.from(value, String);
}
