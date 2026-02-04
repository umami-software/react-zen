'use client';

import { ChevronRight } from 'lucide-react';
import { createContext, type ReactNode, useContext, useState } from 'react';
import { Column, type ColumnProps, Icon, Row, type RowProps, Text } from '@/components';

interface NavMenuContextValue {
  onItemClick?: () => void;
}

const NavMenuContext = createContext<NavMenuContextValue>({});

interface NavMenuProps extends ColumnProps {
  onItemClick?: () => void;
}

export function NavMenu({ onItemClick, children, ...props }: NavMenuProps) {
  return (
    <NavMenuContext.Provider value={{ onItemClick }}>
      <Column gap="1" {...props}>
        {children}
      </Column>
    </NavMenuContext.Provider>
  );
}

interface NavMenuGroupProps extends ColumnProps {
  title: string;
  defaultOpen?: boolean;
  collapsible?: boolean;
}

export function NavMenuGroup({
  title,
  defaultOpen = true,
  collapsible = true,
  children,
  ...props
}: NavMenuGroupProps) {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <Column {...props}>
      <Row
        paddingY="2"
        paddingX="3"
        alignItems="center"
        justifyContent="space-between"
        className={collapsible ? 'cursor-pointer' : ''}
        onClick={collapsible ? () => setIsOpen(!isOpen) : undefined}
      >
        <Text size="xs" weight="semibold" color="muted" transform="uppercase">
          {title}
        </Text>
        {collapsible && (
          <Icon size="sm" color="muted" rotate={isOpen ? 90 : 0}>
            <ChevronRight />
          </Icon>
        )}
      </Row>
      {(collapsible ? isOpen : true) && <Column>{children}</Column>}
    </Column>
  );
}

interface NavMenuItemProps extends RowProps {
  icon?: ReactNode;
  isSelected?: boolean;
}

export function NavMenuItem({ icon, isSelected, children, ...props }: NavMenuItemProps) {
  const { onItemClick } = useContext(NavMenuContext);

  return (
    <Row
      paddingY="2"
      paddingX="3"
      borderRadius="md"
      alignItems="center"
      gap="2"
      onClick={onItemClick}
      backgroundColor={isSelected ? 'interactive' : undefined}
      className={`cursor-pointer ${!isSelected ? 'hover:bg-interactive' : ''}`}
      {...props}
    >
      {icon && (
        <Icon size="sm" color="muted">
          {icon}
        </Icon>
      )}
      <Text color={isSelected ? undefined : 'muted'} weight={isSelected ? 'medium' : undefined}>
        {children}
      </Text>
    </Row>
  );
}
