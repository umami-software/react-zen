import classNames from 'classnames';
import { Children, createElement, ReactElement, ReactNode } from 'react';
import { ColumnProps, TableProps } from 'react-aria-components';
import {
  Table,
  TableHeader,
  TableBody,
  TableColumn,
  TableRow,
  TableCell,
  TableCellProps,
} from './Table';
import styles from './DataTable.module.css';

export interface DataTableProps extends TableProps {
  data?: any[];
}

export function DataTable({ data = [], className, children, ...props }: DataTableProps) {
  // We must map an id for react-aria
  const items =
    data.length && data?.[0]?.id === undefined
      ? data.map((record, id) => ({ ...record, id }))
      : data;

  const widths: string[] = [];

  const columns = Children.map(children as ReactElement, (child: ReactElement<any, any>) => {
    widths.push(child?.props?.width || '1fr');
    return { ...(child.props as DataColumnProps) };
  });

  const gridTemplateColumns = widths.join(' ');

  return (
    <Table {...props} className={classNames(styles.datatable, className)}>
      <TableHeader style={{ gridTemplateColumns }}>
        {columns
          .filter(n => n)
          .map(({ id, label, as, hidden, width, ...columnProps }) => {
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
        {(row: any) => {
          return (
            <TableRow style={{ gridTemplateColumns }}>
              {columns.map(({ id, as, hidden, className, children, ...cellProps }) => {
                const value = typeof children === 'function' ? children(row) : children || row[id];

                return (
                  <TableCell
                    {...(cellProps as TableCellProps)}
                    key={id}
                    className={classNames(styles.cell, className, hidden && styles.hidden)}
                  >
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

export interface DataColumnProps extends ColumnProps {
  id: string;
  label?: ReactNode;
  align?: 'start' | 'center' | 'end';
  as?: string;
  hidden?: boolean;
}

export function DataColumn(props: DataColumnProps) {
  return null;
}
