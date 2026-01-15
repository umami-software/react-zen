import {
  Cell,
  CellProps,
  Column,
  ColumnProps,
  Row,
  RowProps,
  Table as AriaTable,
  TableProps,
  TableBody as AriaTableBody,
  TableBodyProps,
  TableHeader as AriaTableHeader,
  TableHeaderProps,
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
      className={cn('text-sm border-collapse w-full relative', className)}
    >
      {children}
    </AriaTable>
  );
}

function TableHeader({ children, className, style, ...props }: TableHeaderProps<any>) {
  return (
    <AriaTableHeader
      {...props}
      className={cn('grid border-b border-gray-300 dark:border-gray-700', className)}
      style={{ gridTemplateColumns, ...style }}
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
