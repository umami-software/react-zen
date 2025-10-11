import classNames from 'classnames';
import { Children, createElement, HTMLAttributes, ReactElement, ReactNode } from 'react';
import { TableProps } from 'react-aria-components';
import { mapIdProperty } from '@/lib/utils';
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
  const rows = mapIdProperty(data);
  const widths: string[] = [];

  const columns = Children.map(children as ReactElement, (child?: ReactElement<any, any>) => {
    if (child) {
      widths.push(child?.props?.width || '1fr');

      return { ...(child?.props as DataColumnProps) };
    }
    return null;
  })?.filter(n => n);

  const gridTemplateColumns = widths.join(' ');

  return (
    <Table {...props} className={classNames(styles.datatable, className)}>
      <TableHeader style={{ gridTemplateColumns }}>
        {columns?.map(({ id, label, as, hidden, width, ...columnProps }) => {
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
      <TableBody>
        {rows.map((row, index) => {
          return (
            <TableRow key={index} style={{ gridTemplateColumns }}>
              {columns?.map(({ id, as, hidden, className, children, ...cellProps }) => {
                if (hidden) {
                  return null;
                }

                const value =
                  typeof children === 'function' ? children(row, index) : children || row[id];

                return (
                  <TableCell
                    {...(cellProps as TableCellProps)}
                    key={id}
                    className={classNames(styles.cell, className)}
                  >
                    {as ? createElement(as, {}, value) : value}
                  </TableCell>
                );
              })}
            </TableRow>
          );
        })}
      </TableBody>
    </Table>
  );
}

export interface DataColumnProps extends Omit<HTMLAttributes<any>, 'children'> {
  id: string;
  label?: ReactNode;
  align?: 'start' | 'center' | 'end';
  width?: string;
  as?: string;
  hidden?: boolean;
  children?: ReactNode | ((row: any, index: number) => void);
}

export function DataColumn(props: DataColumnProps) {
  return null;
}
