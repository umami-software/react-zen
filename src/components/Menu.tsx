import { ReactNode } from 'react';
import {
  Header,
  Menu as AriaMenu,
  MenuItem as AriaMenuItem,
  MenuSection as AriaMenuSection,
  MenuSectionProps,
  MenuItemProps,
  MenuProps as AriaMenuProps,
  Separator,
  SeparatorProps,
} from 'react-aria-components';
import classNames from 'classnames';
import { Icon } from '@/components/Icon';
import { Icons } from '@/components/Icons';
import styles from './Menu.module.css';

interface MenuProps extends AriaMenuProps<any> {
  className?: string;
  children?: ReactNode;
}

function Menu({ className, children, ...props }: MenuProps) {
  return (
    <AriaMenu {...props} className={classNames(styles.menu, className)}>
      {children}
    </AriaMenu>
  );
}

function MenuItem({ children, className, ...props }: MenuItemProps<any>) {
  return (
    <AriaMenuItem {...props} className={classNames(styles.item, className)}>
      {children as any}
      <div aria-hidden="true" className={styles.check}>
        <Icon>
          <Icons.Check />
        </Icon>
      </div>
    </AriaMenuItem>
  );
}

function MenuSeparator({ className, ...props }: SeparatorProps) {
  return <Separator {...props} className={classNames(styles.separator, className)} />;
}

function MenuSection({
  title,
  className,
  children,
  ...props
}: MenuSectionProps<any> & { title?: string }) {
  return (
    <AriaMenuSection {...props} className={classNames(styles.section, className)}>
      {title && <Header className={styles.header}>{title}</Header>}
      {children as any}
    </AriaMenuSection>
  );
}

export { Menu, MenuItem, MenuSeparator, MenuSection };
export type { MenuProps };
