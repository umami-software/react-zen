import classNames from 'classnames';
import { Column, ColumnProps } from '@/components/Column';
import { Row, RowProps } from '@/components/Row';
import { getHighlightColor } from '@/lib/styles';
import styles from './NavMenu.module.css';

export interface NavMenuProps extends ColumnProps {
  highlightColor?: string;
}

export function NavMenu({ highlightColor, className, style, children, ...props }: NavMenuProps) {
  return (
    <Column
      {...props}
      className={classNames(styles.navmenu, className)}
      style={{ ...style, ...getHighlightColor(highlightColor) }}
    >
      {children}
    </Column>
  );
}

export interface NavMenuItemProps extends RowProps {
  isSelected?: boolean;
}

export function NavMenuItem({ isSelected, className, children, ...props }: NavMenuItemProps) {
  return (
    <Row {...props} className={classNames(styles.item, className, isSelected && styles.selected)}>
      {children}
    </Row>
  );
}
