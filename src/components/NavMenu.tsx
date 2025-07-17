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
  ...props
}: NavMenuGroupProps) {
  const [minimized, setMinimized] = useState(!!isMinimized);

  return (
    <Column
      {...props}
      className={classNames(styles.group, className, minimized && styles.minimized)}
    >
      <Row
        className={classNames(styles.title, styles.item)}
        alignItems="center"
        justifyContent="space-between"
        onClick={() => setMinimized(!minimized)}
      >
        <Text transform="uppercase" size="1" weight="bold" color>
          {title}
        </Text>
        <Icon rotate={minimized ? 0 : 90}>
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
