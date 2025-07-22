import { useState } from 'react';
import classNames from 'classnames';
import { Column, ColumnProps } from '@/components/Column';
import { Row, RowProps } from '@/components/Row';
import { Icon } from '@/components/Icon';
import { Text } from '@/components/Text';
import { Chevron } from '@/components/icons';
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

export interface NavMenuGroupProps extends ColumnProps {
  title?: string;
  allowMinimize?: boolean;
  isMinimized?: boolean;
}

export function NavMenuGroup({
  title,
  allowMinimize,
  isMinimized,
  className,
  children,
  gap = true,
  ...props
}: NavMenuGroupProps) {
  const [minimized, setMinimized] = useState(!!isMinimized);

  return (
    <Column {...props} gap={gap} className={classNames(className, minimized && styles.minimized)}>
      <Row
        className={styles.item}
        alignItems="center"
        justifyContent="space-between"
        onClick={() => setMinimized(!minimized)}
      >
        <Text className={styles.title}>{title}</Text>
        <Icon rotate={minimized ? 0 : 90} color="muted">
          <Chevron />
        </Icon>
      </Row>
      {!minimized && children}
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
