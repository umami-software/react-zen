import { ReactNode } from 'react';
import {
  Header,
  Menu as AriaMenu,
  MenuItem as AriaMenuItem,
  MenuSection as AriaMenuSection,
  MenuSectionProps as AriaMenuSectionProps,
  MenuItemProps as AriaMenuItemProps,
  MenuProps as AriaMenuProps,
  Separator,
  SeparatorProps,
} from 'react-aria-components';
import classNames from 'classnames';
import { Icon } from '@/components/Icon';
import { Icons } from '@/components/Icons';
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
  showChecked?: boolean;
}

export function MenuItem({ showChecked = false, children, className, ...props }: MenuItemProps) {
  return (
    <AriaMenuItem {...props} className={classNames(styles.item, className)}>
      {children as any}
      {showChecked && (
        <div aria-hidden="true" className={styles.check}>
          <Icon>
            <Icons.Check />
          </Icon>
        </div>
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
