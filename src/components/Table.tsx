import {
  Cell,
  CellProps,
  Column,
  ColumnProps,
  Row,
  RowProps,
  Table,
  TableProps,
  TableBody,
  TableBodyProps,
  TableHeader,
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

function _Table({ children, className, ...props }: TableProps) {
  return (
    <Table {...props} className={classNames(styles.table, className)} aria-label="Table">
      {children}
    </Table>
  );
}

function _TableHeader({ children, className, ...props }: TableHeaderProps<any>) {
  return (
    <TableHeader {...props} className={classNames(styles.header, className)}>
      {children}
    </TableHeader>
  );
}

function _TableBody({ children, className, ...props }: TableBodyProps<any>) {
  return (
    <TableBody {...props} className={classNames(styles.body, className)}>
      {children}
    </TableBody>
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

export {
  _Table as Table,
  _TableHeader as TableHeader,
  _TableBody as TableBody,
  TableRow,
  TableColumn,
  TableCell,
};

export default _Table;
