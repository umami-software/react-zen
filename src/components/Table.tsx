import type { CSSProperties } from 'react';
import {
  Table as AriaTable,
  TableBody as AriaTableBody,
  TableHeader as AriaTableHeader,
  Cell,
  type CellProps,
  Column,
  type ColumnProps,
  Row,
  type RowProps,
  type TableBodyProps,
  type TableHeaderProps,
  type TableProps,
} from 'react-aria-components';
import { cn } from './lib/tailwind';

const gridTemplateColumns = 'repeat(auto-fit, minmax(140px, 1fr))';

interface TableColumnProps extends ColumnProps {
  align?: 'start' | 'center' | 'end';
}

interface TableCellProps extends CellProps {
  align?: 'start' | 'center' | 'end';
}

const alignClasses = {
  start: 'justify-start',
  center: 'justify-center',
  end: 'justify-end',
};

function Table({ children, className, ...props }: TableProps) {
  return (
    <AriaTable
      aria-label="Table"
      {...props}
      className={cn('grid text-base w-full relative', className)}
    >
      {children}
    </AriaTable>
  );
}

interface TableHeaderComponentProps extends Omit<TableHeaderProps<any>, 'style'> {
  style?: CSSProperties;
}

function TableHeader({ children, className, style, ...props }: TableHeaderComponentProps) {
  const cols = style?.gridTemplateColumns || gridTemplateColumns;

  return (
    <AriaTableHeader
      {...props}
      className={cn(
        '[&>tr]:grid [&>tr]:border-b [&>tr]:border-gray-300 dark:[&>tr]:border-gray-700 [&>tr]:[grid-template-columns:var(--grid-cols)]',
        className,
      )}
      style={{ '--grid-cols': cols } as CSSProperties}
    >
      {children}
    </AriaTableHeader>
  );
}

function TableBody({ children, className, ...props }: TableBodyProps<any>) {
  return (
    <AriaTableBody {...props} className={cn('contents', className)}>
      {children}
    </AriaTableBody>
  );
}

function TableRow({ children, className, style, ...props }: RowProps<any>) {
  return (
    <Row
      {...props}
      className={cn('grid border-b border-gray-300/50 dark:border-gray-700/50 min-h-10', className)}
      style={{ gridTemplateColumns, ...style }}
    >
      {children}
    </Row>
  );
}

function TableColumn({ children, className, align, ...props }: TableColumnProps) {
  return (
    <Column
      {...props}
      className={cn(
        'flex p-2 text-left font-bold flex-1 first:pl-0 last:pr-0',
        align && alignClasses[align],
        className,
      )}
      isRowHeader
    >
      {children}
    </Column>
  );
}

function TableCell({ children, className, align, ...props }: TableCellProps) {
  return (
    <Cell
      {...props}
      className={cn(
        'flex p-2 flex-1 first:pl-0 last:pr-0',
        '[&_a]:font-medium [&_a]:underline [&_a]:decoration-gray-300 dark:[&_a]:decoration-gray-600 [&_a]:underline-offset-4',
        '[&_a:hover]:decoration-gray-900 dark:[&_a:hover]:decoration-gray-100',
        align && alignClasses[align],
        className,
      )}
    >
      {children}
    </Cell>
  );
}

export { Table, TableHeader, TableBody, TableRow, TableColumn, TableCell };
export type { TableCellProps, TableColumnProps, TableBodyProps };
