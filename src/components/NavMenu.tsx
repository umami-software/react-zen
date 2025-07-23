import { createContext, useContext, useState } from 'react';
import classNames from 'classnames';
import { Column, ColumnProps } from '@/components/Column';
import { Row, RowProps } from '@/components/Row';
import { Icon } from '@/components/Icon';
import { Text } from '@/components/Text';
import { Chevron } from '@/components/icons';
import styles from './NavMenu.module.css';

export interface NavMenuProps extends ColumnProps {
  itemBackgroundColor?: string;
  muteItems?: boolean;
}

const NavMenuContext = createContext(null as any);

export function NavMenu({
  itemBackgroundColor = '2',
  muteItems = true,
  className,
  style,
  children,
  ...props
}: NavMenuProps) {
  return (
    <NavMenuContext.Provider value={{ itemBackgroundColor }}>
      <Column
        {...props}
        className={classNames(styles.navmenu, muteItems && styles.muted, className)}
      >
        {children}
      </Column>
    </NavMenuContext.Provider>
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
  const { itemBackgroundColor } = useContext(NavMenuContext);

  return (
    <Row
      {...props}
      backgroundColor={isSelected && itemBackgroundColor}
      className={classNames(styles.item, className, isSelected && styles.selected)}
    >
      {children}
    </Row>
  );
}
