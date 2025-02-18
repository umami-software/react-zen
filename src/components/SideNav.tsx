import React, { ReactNode } from 'react';
import { Icon } from '@/components/Icon';
import styles from './SideNav.module.css';

export function SideNav({ children }: { children: ReactNode }) {
  return <div className={styles.sidenav}>{children}</div>;
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
    <div className={styles.header} data-theme="dark">
      {icon && <Icon size="sm">{icon}</Icon>}
      <div className={styles.name}>{name}</div>
      {children}
    </div>
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
  children,
}: {
  label: string;
  icon: ReactNode;
  children?: ReactNode;
}) {
  return (
    <div className={styles.item}>
      {icon && <Icon size="sm">{icon}</Icon>}
      {label}
      {children}
    </div>
  );
}
