import classNames from 'classnames';
import { Children, createElement, ReactElement, ReactNode } from 'react';
import { ColumnProps, TableProps } from 'react-aria-components';
import { Table, TableHeader, TableBody, TableColumn, TableRow, TableCell } from './Table';
import styles from './DataTable.module.css';

interface DataTableProps extends TableProps {
  data?: any[];
}

function DataTable({ data = [], className, children, ...props }: DataTableProps) {
  // We must map an id for react-aria
  const items =
    data.length && data?.[0]?.id === undefined
      ? data.map((record, id) => ({ ...record, id }))
      : data;

  const columns = Children.map(children as ReactElement, (child: ReactElement) => {
    return { ...child.props };
  });

  return (
    <Table {...props} className={classNames(styles.datatable, className)}>
      <TableHeader>
        {columns.map(({ id, label, as, hidden, ...columnProps }) => {
          if (hidden) {
            return null;
          }

          return (
            <TableColumn {...columnProps} key={id} id={id}>
              {label}
            </TableColumn>
          );
        })}
      </TableHeader>
      <TableBody items={items}>
        {row => {
          return (
            <TableRow>
              {columns.map(({ id, as, children, className, ...cellProps }) => {
                const value =
                  typeof children === 'function' ? children(row, id) : children || row[id];
                const Component = as || 'div';
                return (
                  <TableCell {...cellProps} key={id} className={classNames(styles.cell, className)}>
                    {as ? createElement(as, {}, value) : value}
                  </TableCell>
                );
              })}
            </TableRow>
          );
        }}
      </TableBody>
    </Table>
  );
}

interface DataColumnProps extends ColumnProps {
  id: string;
  label?: ReactNode;
}

function DataColumn(props: DataColumnProps) {
  return null;
}

export { DataTable, DataColumn };
