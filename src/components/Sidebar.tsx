import { ReactNode, createContext, useContext } from 'react';
import classNames from 'classnames';
import { TooltipTrigger, Focusable } from 'react-aria-components';
import { Column, ColumnProps } from '@/components/Column';
import { Row, RowProps } from '@/components/Row';
import { Icon } from '@/components/Icon';
import { Tooltip } from '@/components/Tooltip';
import { Text } from '@/components/Text';
import styles from './Sidebar.module.css';

export interface SidebarProps extends ColumnProps {
  variant?: '1' | '2' | '3' | 'quiet';
  isCollapsed?: boolean;
  muteItems?: boolean;
  showBorder?: boolean;
  children?: ReactNode;
}

const SidebarContext = createContext(null as any);

export function Sidebar({
  variant = '1',
  isCollapsed,
  muteItems = true,
  showBorder = true,
  className,
  children,
  ...props
}: SidebarProps) {
  return (
    <SidebarContext.Provider value={{ isCollapsed }}>
      <Column
        {...props}
        className={classNames(
          styles.sidenav,
          isCollapsed && styles.collapsed,
          muteItems && styles.muted,
          variant && styles[`variant-${variant}`],
          !showBorder && styles.noborder,
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
    <Column {...props} className={classNames(styles.section, className)}>
      {title && <div className={styles.title}>{title}</div>}
      <div className={styles.content}>{children}</div>
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
    <Row {...props} className={classNames(styles.header, className)}>
      {icon && <Icon size="sm">{icon}</Icon>}
      <div className={classNames(styles.name, styles.label)}>{label}</div>
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
          className={classNames(styles.item, className, isSelected && styles.selected)}
        >
          {icon && <Icon size="sm">{icon}</Icon>}
          {label && <Text className={classNames(styles.label)}>{label}</Text>}
          {children}
        </Row>
      </Focusable>
      <Tooltip placement="right">{label}</Tooltip>
    </TooltipTrigger>
  );
}
