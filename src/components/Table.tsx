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

interface TableColumnProps extends ColumnProps {
  alignment?: 'start' | 'center' | 'end';
}

interface TableCellProps extends CellProps {
  alignment?: 'start' | 'center' | 'end';
}

function Table({ children, className, ...props }: TableProps) {
  return (
    <AriaTable {...props} className={classNames(styles.table, className)} aria-label="Table">
      {children}
    </AriaTable>
  );
}

function TableHeader({ children, className, ...props }: TableHeaderProps<any>) {
  return (
    <AriaTableHeader {...props} className={classNames(styles.header, className)}>
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

function TableRow({ children, className, ...props }: RowProps<any>) {
  return (
    <Row {...props} className={classNames(styles.row, className)}>
      {children}
    </Row>
  );
}

function TableColumn({ children, className, alignment, ...props }: TableColumnProps) {
  return (
    <Column
      {...props}
      className={classNames(styles.column, className, alignment && styles[alignment])}
      isRowHeader
    >
      {children}
    </Column>
  );
}

function TableCell({ children, className, alignment, ...props }: TableCellProps) {
  return (
    <Cell {...props} className={classNames(styles.cell, className, alignment && styles[alignment])}>
      {children}
    </Cell>
  );
}

export { Table, TableHeader, TableBody, TableRow, TableColumn, TableCell };
