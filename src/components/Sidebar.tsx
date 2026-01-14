import { ReactNode, createContext, useContext } from 'react';
import { TooltipTrigger, Focusable } from 'react-aria-components';
import { Column, ColumnProps } from '@/components/Column';
import { Row, RowProps } from '@/components/Row';
import { Icon } from '@/components/Icon';
import { Tooltip } from '@/components/Tooltip';
import { Text } from '@/components/Text';
import { cn } from './lib/tailwind';

export interface SidebarProps extends ColumnProps {
  isCollapsed?: boolean;
  muteItems?: boolean;
  children?: ReactNode;
}

const SidebarContext = createContext(null as any);

export function Sidebar({
  isCollapsed,
  muteItems,
  className,
  children,
  ...props
}: SidebarProps) {
  return (
    <SidebarContext.Provider value={{ isCollapsed }}>
      <Column
        border="right"
        {...props}
        className={cn(
          'text-sm',
          isCollapsed && 'w-16',
          muteItems && 'text-gray-500 dark:text-gray-400',
          className,
        )}
      >
        {children}
      </Column>
    </SidebarContext.Provider>
  );
}

export function SidebarSection({
  title,
  className,
  children,
  ...props
}: { title?: string; children: ReactNode } & ColumnProps) {
  return (
    <Column {...props} className={cn('py-2', className)}>
      {title && (
        <div className="px-4 py-2 text-xs font-semibold uppercase text-gray-500 dark:text-gray-400">
          {title}
        </div>
      )}
      <div className="flex flex-col">{children}</div>
    </Column>
  );
}

export function SidebarHeader({
  label,
  icon,
  className,
  children,
  ...props
}: {
  label: string;
  icon?: ReactNode;
  children?: ReactNode;
} & RowProps) {
  return (
    <Row {...props} className={cn('px-4 py-3 gap-3 items-center', className)}>
      {icon && <Icon size="sm">{icon}</Icon>}
      {label && <div className="font-semibold">{label}</div>}
      {children}
    </Row>
  );
}

export interface SidebarItemProps extends RowProps {
  isSelected?: boolean;
}

export function SidebarItem({
  label,
  icon,
  isSelected,
  className,
  children,
  ...props
}: {
  label?: string;
  icon?: ReactNode;
} & SidebarItemProps) {
  const { isCollapsed } = useContext(SidebarContext);

  return (
    <TooltipTrigger delay={0} closeDelay={0} isDisabled={!isCollapsed}>
      <Focusable>
        <Row
          {...props}
          className={cn(
            'px-4 py-2 gap-3 items-center rounded cursor-pointer',
            'hover:bg-gray-100 dark:hover:bg-gray-800',
            isSelected && 'bg-gray-100 dark:bg-gray-800 font-medium',
            isCollapsed && 'justify-center px-0',
            className
          )}
        >
          {icon && <Icon size="sm">{icon}</Icon>}
          {label && !isCollapsed && <Text>{label}</Text>}
          {children}
        </Row>
      </Focusable>
      <Tooltip placement="right">{label}</Tooltip>
    </TooltipTrigger>
  );
}
