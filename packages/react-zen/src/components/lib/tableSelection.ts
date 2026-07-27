import { createContext } from 'react';

export type TableSelectionMode = 'none' | 'single' | 'multiple';

export interface TableSelectionContextValue {
  selectionMode: TableSelectionMode;
  selectedKeys: Set<string>;
  rowKeys: Set<string>;
  registerRow: (key: string) => () => void;
  setRowSelected: (key: string, selected: boolean) => void;
  setAllSelected: (selected: boolean) => void;
}

export interface TableSelectionScope {
  type: 'header' | 'row';
  rowKey?: string;
}

export const TableSelectionContext = createContext<TableSelectionContextValue | null>(null);
export const TableSelectionScopeContext = createContext<TableSelectionScope | null>(null);
