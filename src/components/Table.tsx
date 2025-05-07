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
import classNames from 'classnames';
import styles from './Table.module.css';

const gridTemplateColumns = 'repeat(auto-fit, minmax(140px, 1fr))';

interface TableColumnProps extends ColumnProps {
  align?: 'start' | 'center' | 'end';
}

interface TableCellProps extends CellProps {
  align?: 'start' | 'center' | 'end';
}

function Table({ children, className, ...props }: TableProps) {
  return (
    <AriaTable {...props} className={classNames(styles.table, className)} aria-label="Table">
      {children}
    </AriaTable>
  );
}

function TableHeader({ children, className, style, ...props }: TableHeaderProps<any>) {
  return (
    <AriaTableHeader
      {...props}
      className={classNames(styles.header, className)}
      style={{ gridTemplateColumns, ...style }}
    >
      {children}
    </AriaTableHeader>
  );
}

function TableBody({ children, className, ...props }: TableBodyProps<any>) {
  return (
    <AriaTableBody {...props} className={classNames(styles.body, className)}>
      {children}
    </AriaTableBody>
  );
}

function TableRow({ children, className, style, ...props }: RowProps<any>) {
  return (
    <Row
      {...props}
      className={classNames(styles.row, className)}
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
      className={classNames(styles.column, className, align && styles[align])}
      isRowHeader
    >
      {children}
    </Column>
  );
}

function TableCell({ children, className, align, ...props }: TableCellProps) {
  return (
    <Cell {...props} className={classNames(styles.cell, className, align && styles[align])}>
      {children}
    </Cell>
  );
}

export { Table, TableHeader, TableBody, TableRow, TableColumn, TableCell };
export type { TableCellProps, TableColumnProps, TableBodyProps };
