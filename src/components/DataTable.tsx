import classNames from 'classnames';
import { Children, ReactElement, ReactNode } from 'react';
import { ColumnProps, TableProps } from 'react-aria-components';
import { Table, TableHeader, TableBody, TableColumn, TableRow, TableCell } from './Table';
import styles from './DataTable.module.css';

interface DataTableProps extends TableProps {
  data?: any[];
}

function DataTable({ data = [], className, children, ...props }: DataTableProps) {
  const columns = Children.map(children as ReactElement, (child: ReactElement) => {
    return { ...child.props, value: child.props.children };
  });

  return (
    <Table {...props} className={classNames(styles.datatable, className)}>
      <TableHeader>
        {columns.map(({ id, label, hidden, ...columnProps }) => {
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
      <TableBody items={data}>
        {row => {
          return (
            <TableRow>
              {columns.map(({ id, value, className, ...cellProps }) => {
                return (
                  <TableCell {...cellProps} key={id} className={classNames(styles.cell, className)}>
                    {!value && row[id]}
                    {typeof value === 'function' ? value(row, id) : value}
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
  row?: object;
}

function DataColumn(props: DataColumnProps) {
  return null;
}

export { DataTable, DataColumn };

export default DataTable;
