import type {
  CSSProperties,
  HTMLAttributes,
  TableHTMLAttributes,
  TdHTMLAttributes,
  ThHTMLAttributes,
} from 'react';
import { cn } from './lib/tailwind';

const gridTemplateColumns = 'repeat(auto-fit, minmax(140px, 1fr))';

export interface TableProps extends TableHTMLAttributes<HTMLTableElement> {
  selectionMode?: 'none' | 'single' | 'multiple';
  selectedKeys?: Iterable<string>;
  defaultSelectedKeys?: Iterable<string>;
  onSelectionChange?: (keys: Set<string>) => void;
}

export interface TableColumnProps extends Omit<ThHTMLAttributes<HTMLTableCellElement>, 'align'> {
  align?: 'start' | 'center' | 'end';
  isRowHeader?: boolean;
}

export interface TableCellProps extends Omit<TdHTMLAttributes<HTMLTableCellElement>, 'align'> {
  align?: 'start' | 'center' | 'end';
}

export interface TableRowProps extends HTMLAttributes<HTMLTableRowElement> {
  id?: string;
}

const alignClasses = {
  start: 'justify-start',
  center: 'justify-center',
  end: 'justify-end',
};

export function Table({
  children,
  className,
  selectionMode: _selectionMode,
  selectedKeys: _selectedKeys,
  defaultSelectedKeys: _defaultSelectedKeys,
  onSelectionChange: _onSelectionChange,
  ...props
}: TableProps) {
  return (
    <table {...props} className={cn('grid text-base w-full relative', className)}>
      {children}
    </table>
  );
}

interface TableHeaderComponentProps extends HTMLAttributes<HTMLTableSectionElement> {
  style?: CSSProperties;
}

export function TableHeader({ children, className, style, ...props }: TableHeaderComponentProps) {
  const cols = style?.gridTemplateColumns || gridTemplateColumns;
  return (
    <thead
      {...props}
      className={cn(
        '[&>tr]:grid [&>tr]:border-b [&>tr]:border-edge [&>tr]:[grid-template-columns:var(--grid-cols)]',
        className,
      )}
      style={{ '--grid-cols': cols } as CSSProperties}
    >
      <tr>{children}</tr>
    </thead>
  );
}

export function TableBody({
  children,
  className,
  ...props
}: HTMLAttributes<HTMLTableSectionElement>) {
  return (
    <tbody {...props} className={cn('contents', className)}>
      {children}
    </tbody>
  );
}

export function TableRow({ children, className, style, id, ...props }: TableRowProps) {
  return (
    <tr
      {...props}
      data-row-id={id}
      className={cn('grid border-b border-edge-muted min-h-10', className)}
      style={{ gridTemplateColumns, ...style }}
    >
      {children}
    </tr>
  );
}

export function TableColumn({
  children,
  className,
  align,
  isRowHeader: _isRowHeader,
  ...props
}: TableColumnProps) {
  return (
    <th
      {...props}
      scope="col"
      className={cn(
        'flex p-2 text-left font-bold flex-1 first:pl-0 last:pr-0',
        align && alignClasses[align],
        className,
      )}
    >
      {children}
    </th>
  );
}

export function TableCell({ children, className, align, ...props }: TableCellProps) {
  return (
    <td
      {...props}
      className={cn(
        'flex p-2 flex-1 first:pl-0 last:pr-0',
        '[&_a]:font-medium [&_a]:underline [&_a]:decoration-edge [&_a]:underline-offset-4',
        '[&_a:hover]:decoration-primary',
        align && alignClasses[align],
        className,
      )}
    >
      {children}
    </td>
  );
}
