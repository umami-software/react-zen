import { ReactNode, createContext, useContext, useRef } from 'react';
import classNames from 'classnames';
import { useFocusable } from '@react-aria/focus';
import { TooltipTrigger } from 'react-aria-components';
import { Block, BlockProps } from '@/components/Block';
import { Icon } from '@/components/Icon';
import { Text } from '@/components/Text';
import { Button } from '@/components/Button';
import { Tooltip } from '@/components/Tooltip';
import styles from './SideNav.module.css';

export interface SideNavProps {
  isCollapsed?: boolean;
  children: ReactNode;
}

const SideNavContext = createContext(null as any);

export function SideNav({ isCollapsed, children }: SideNavProps) {
  return (
    <SideNavContext.Provider value={{ isCollapsed }}>
      <div className={classNames(styles.sidenav, isCollapsed && styles.collapsed)}>{children}</div>
    </SideNavContext.Provider>
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
    <Block>
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
  ...props
}: {
  label?: string;
  icon?: ReactNode;
} & BlockProps) {
  const { isCollapsed } = useContext(SideNavContext);
  const ref = useRef(null);
  const { focusableProps } = useFocusable({ isDisabled: false }, ref);

  if (isCollapsed) {
    /*
    return (
      <TooltipTrigger delay={0}>
        <Block {...focusableProps} ref={ref} className={classNames(styles.item, className)}>
          {icon && <Icon size="sm">{icon}</Icon>}
        </Block>
        <Tooltip placement="right">{label}</Tooltip>
      </TooltipTrigger>
    );*/
  }

  return (
    <Block {...props} className={classNames(styles.item, className)}>
      {icon && <Icon size="sm">{icon}</Icon>}
      {label && <Text className={styles.label}>{label}</Text>}
    </Block>
  );
}
