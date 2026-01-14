import { createContext, useContext, useState } from 'react';
import { Column, type ColumnProps } from '@/components/Column';
import { Icon } from '@/components/Icon';
import { ChevronRight } from '@/components/icons';
import { Row, type RowProps } from '@/components/Row';
import { Text } from '@/components/Text';
import { cn } from './lib/tailwind';

export interface NavMenuProps extends ColumnProps {
  muteItems?: boolean;
  onItemClick?: () => void;
}

const NavMenuContext = createContext(null as any);

export function NavMenu({
  muteItems,
  onItemClick,
  className,
  children,
  ...props
}: NavMenuProps) {
  return (
    <NavMenuContext.Provider value={{ onItemClick }}>
      <Column
        {...props}
        className={cn(
          'text-sm',
          muteItems && 'text-gray-500 dark:text-gray-400',
          className
        )}
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
      gap="3"
      {...props}
      className={cn(
        className,
        allowMinimize && 'cursor-pointer',
        allowMinimize && minimized && '[&_.navmenu-children]:hidden',
      )}
    >
      <Row
        className="py-2 px-3"
        alignItems="center"
        justifyContent="space-between"
        onClick={handleClick}
      >
        <Text className="text-xs font-semibold uppercase text-gray-500 dark:text-gray-400">
          {title}
        </Text>
        {allowMinimize && (
          <Icon rotate={minimized ? 0 : 90} color="muted">
            <ChevronRight />
          </Icon>
        )}
      </Row>
      {!minimized && <div className="navmenu-children">{children}</div>}
    </Column>
  );
}

export interface NavMenuItemProps extends RowProps {
  isSelected?: boolean;
}

export function NavMenuItem({ isSelected, className, children, ...props }: NavMenuItemProps) {
  const { onItemClick } = useContext(NavMenuContext);

  return (
    <Row
      {...props}
      onClick={onItemClick}
      className={cn(
        'py-2 px-3 rounded cursor-pointer',
        'hover:bg-gray-100 dark:hover:bg-gray-800',
        isSelected && 'bg-gray-100 dark:bg-gray-800 font-medium',
        className
      )}
    >
      {children}
    </Row>
  );
}
