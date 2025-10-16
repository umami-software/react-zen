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
  onItemClick?: () => void;
}

const NavMenuContext = createContext(null as any);

export function NavMenu({
  itemBackgroundColor = '2',
  muteItems,
  onItemClick,
  className,
  children,
  ...props
}: NavMenuProps) {
  return (
    <NavMenuContext.Provider value={{ itemBackgroundColor, onItemClick }}>
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
  allowMinimize = true,
  isMinimized,
  className,
  children,
  ...props
}: NavMenuGroupProps) {
  const [minimized, setMinimized] = useState(!!isMinimized);

  const handleClick = () => {
    if (allowMinimize) {
      setMinimized(state => !state);
    }
  };

  return (
    <Column
      gap={true}
      {...props}
      className={classNames(
        className,
        allowMinimize && styles.clickable,
        allowMinimize && minimized && styles.minimized,
      )}
    >
      <Row
        className={styles.item}
        alignItems="center"
        justifyContent="space-between"
        onClick={handleClick}
      >
        <Text className={styles.title}>{title}</Text>
        {allowMinimize && (
          <Icon rotate={minimized ? 0 : 90} color="muted">
            <Chevron />
          </Icon>
        )}
      </Row>
      {!minimized && children}
    </Column>
  );
}

export interface NavMenuItemProps extends RowProps {
  isSelected?: boolean;
}

export function NavMenuItem({ isSelected, className, children, ...props }: NavMenuItemProps) {
  const { itemBackgroundColor, onItemClick } = useContext(NavMenuContext);

  return (
    <Row
      {...props}
      onClick={onItemClick}
      backgroundColor={isSelected && itemBackgroundColor}
      hoverBackgroundColor={itemBackgroundColor}
      className={classNames(styles.item, className, isSelected && styles.selected)}
    >
      {children}
    </Row>
  );
}
