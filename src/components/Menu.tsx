import { ReactNode } from 'react';
import {
  Header,
  Menu as AriaMenu,
  MenuItem as AriaMenuItem,
  MenuSection as AriaMenuSection,
  MenuSectionProps as AriaMenuSectionProps,
  MenuItemProps as AriaMenuItemProps,
  MenuProps as AriaMenuProps,
  SubmenuTrigger as AriaSubmenuTrigger,
  SubmenuTriggerProps as AriaSubmenuTriggerProps,
  Separator,
  SeparatorProps,
} from 'react-aria-components';
import classNames from 'classnames';
import { Check, Chevron } from '@/components/icons';
import { Icon } from './Icon';
import { Text } from './Text';
import styles from './Menu.module.css';

export interface MenuProps extends AriaMenuProps<any> {
  className?: string;
  children?: ReactNode;
}

export function Menu({ className, children, ...props }: MenuProps) {
  return (
    <AriaMenu {...props} className={classNames(styles.menu, className)}>
      {children}
    </AriaMenu>
  );
}

export interface MenuItemProps extends AriaMenuItemProps {
  icon?: ReactNode;
  label?: string;
  showChecked?: boolean;
  showSubMenuIcon?: boolean;
}

export function MenuItem({
  icon,
  label,
  showChecked = true,
  showSubMenuIcon,
  children,
  className,
  ...props
}: MenuItemProps) {
  return (
    <AriaMenuItem {...props} className={classNames(styles.item, className)}>
      <div className={styles.label}>
        {icon && <Icon>{icon}</Icon>}
        {label && <Text>{label}</Text>}
        {children as any}
      </div>
      {showChecked && (
        <Icon aria-hidden="true" className={styles.checkmark}>
          <Check />
        </Icon>
      )}
      {showSubMenuIcon && (
        <Icon aria-hidden="true">
          <Chevron />
        </Icon>
      )}
    </AriaMenuItem>
  );
}

export function MenuSeparator({ className, ...props }: SeparatorProps) {
  return <Separator {...props} className={classNames(styles.separator, className)} />;
}

export interface MenuSectionProps extends AriaMenuSectionProps<any> {
  title?: string;
}

export function MenuSection({ title, className, children, ...props }: MenuSectionProps) {
  return (
    <AriaMenuSection {...props} className={classNames(styles.section, className)}>
      {title && <Header className={styles.header}>{title}</Header>}
      {children as any}
    </AriaMenuSection>
  );
}

export interface SubmenuTriggerProps extends AriaSubmenuTriggerProps {}

export function SubMenuTrigger({ children, ...props }: SubmenuTriggerProps) {
  return <AriaSubmenuTrigger {...props}>{children}</AriaSubmenuTrigger>;
}
