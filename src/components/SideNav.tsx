import { ReactNode } from 'react';
import classNames from 'classnames';
import { Button, ButtonProps } from '@/components/Button';
import { Block } from '@/components/Block';
import { Icon } from '@/components/Icon';
import { Text } from '@/components/Text';
import styles from './SideNav.module.css';

export interface SideNavProps {
  isCollapsed?: boolean;
  children: ReactNode;
}

export function SideNav({ isCollapsed, children }: SideNavProps) {
  return (
    <div className={classNames(styles.sidenav, isCollapsed && styles.collapsed)}>{children}</div>
  );
}

export function SideNavHeader({
  name,
  icon,
  children,
}: {
  name: string;
  icon?: ReactNode;
  children?: ReactNode;
}) {
  return (
    <Block style={{ justifyContent: 'flex-start' }}>
      {icon && <Icon size="sm">{icon}</Icon>}
      <div className={classNames(styles.name, styles.label)}>{name}</div>
      {children}
    </Block>
  );
}

export function SideNavSection({ title, children }: { title?: string; children: ReactNode }) {
  return (
    <div className={styles.section}>
      {title && <div className={styles.title}>{title}</div>}
      <div className={styles.content}>{children}</div>
    </div>
  );
}

export function SideNavItem({
  label,
  icon,
  className,
  children,
  ...props
}: {
  label?: string;
  icon?: ReactNode;
} & ButtonProps) {
  return (
    <Button variant="quiet" {...props} className={classNames(styles.item, className)}>
      {icon && <Icon size="sm">{icon}</Icon>}
      {label && <Text className={styles.label}>{label}</Text>}
      {children}
    </Button>
  );
}
