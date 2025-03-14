import { ReactNode, createContext, useContext, forwardRef } from 'react';
import classNames from 'classnames';
import { TooltipTrigger, Focusable } from 'react-aria-components';
import { Box, BoxProps } from '@/components/Box';
import { Icon } from '@/components/Icon';
import { Text } from '@/components/Text';
import { Tooltip } from '@/components/Tooltip';
import styles from './SideNav.module.css';

export interface SideNavProps extends BoxProps {
  variant?: '1' | '2' | '3';
  isCollapsed?: boolean;
  showBorder?: boolean;
}

const SideNavContext = createContext(null as any);

export function SideNav({
  variant = '2',
  isCollapsed,
  showBorder = true,
  className,
  children,
  ...props
}: SideNavProps) {
  return (
    <SideNavContext.Provider value={{ isCollapsed }}>
      <Box
        {...props}
        className={classNames(
          styles.sidenav,
          isCollapsed && styles.collapsed,
          variant && styles[`variant-${variant}`],
          !showBorder && styles.noborder,
          className,
        )}
      >
        {children}
      </Box>
    </SideNavContext.Provider>
  );
}

export function SideNavSection({
  title,
  children,
}: { title?: string; children: ReactNode } & BoxProps) {
  return (
    <Box className={styles.section}>
      {title && <div className={styles.title}>{title}</div>}
      <div className={styles.content}>{children}</div>
    </Box>
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
} & BoxProps) {
  return (
    <Box {...props} className={classNames(styles.header, className)}>
      {icon && <Icon size="sm">{icon}</Icon>}
      <div className={classNames(styles.name, styles.label)}>{label}</div>
      {children}
    </Box>
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
} & BoxProps) {
  const { isCollapsed } = useContext(SideNavContext);

  return (
    <TooltipTrigger delay={0} closeDelay={0} isDisabled={!isCollapsed}>
      <Focusable>
        <Box {...props} className={classNames(styles.item, className)}>
          {icon && <Icon size="sm">{icon}</Icon>}
          <div className={classNames(styles.label)}>{label}</div>
          {children}
        </Box>
      </Focusable>
      <Tooltip placement="right">{label}</Tooltip>
    </TooltipTrigger>
  );
}
