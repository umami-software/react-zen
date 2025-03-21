import { ReactNode, createContext, useContext } from 'react';
import classNames from 'classnames';
import { TooltipTrigger, Focusable } from 'react-aria-components';
import { Column, ColumnProps } from '@/components/Column';
import { Row, RowProps } from '@/components/Row';
import { Icon } from '@/components/Icon';
import { Tooltip } from '@/components/Tooltip';
import { Text } from '@/components/Text';
import styles from './SideNav.module.css';

export interface SideNavProps extends ColumnProps {
  variant?: '1' | '2' | '3' | 'quiet';
  isCollapsed?: boolean;
  muteItems?: boolean;
  showBorder?: boolean;
  children?: ReactNode;
}

const SideNavContext = createContext(null as any);

export function SideNav({
  variant = '1',
  isCollapsed,
  muteItems = true,
  showBorder = true,
  className,
  children,
  ...props
}: SideNavProps) {
  return (
    <SideNavContext.Provider value={{ isCollapsed }}>
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
    </SideNavContext.Provider>
  );
}

export function SideNavSection({
  title,
  children,
}: { title?: string; children: ReactNode } & ColumnProps) {
  return (
    <Column className={styles.section}>
      {title && <div className={styles.title}>{title}</div>}
      <div className={styles.content}>{children}</div>
    </Column>
  );
}

export function SideNavHeader({
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

export interface SideNavItemProps extends RowProps {
  isSelected?: boolean;
}

export function SideNavItem({
  label,
  icon,
  isSelected,
  className,
  children,
  ...props
}: {
  label?: string;
  icon?: ReactNode;
} & SideNavItemProps) {
  const { isCollapsed } = useContext(SideNavContext);

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
