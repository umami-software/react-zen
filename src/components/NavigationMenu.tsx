import React, { ReactNode } from 'react';
import {
  Root,
  List,
  Item,
  Trigger,
  Content,
  Link,
  Indicator,
  Viewport,
  NavigationMenuProps as RadixNavigationMenuProps,
  NavigationMenuItemProps,
  NavigationMenuTriggerProps,
  NavigationMenuContentProps,
  NavigationMenuLinkProps,
} from '@radix-ui/react-navigation-menu';
import classNames from 'classnames';
import { Icon } from './Icon';
import { Icons } from './Icons';
import styles from './NavigationMenu.module.css';

export interface NavigationMenuProps extends RadixNavigationMenuProps {
  showArrow?: boolean;
}

export function NavigationMenu({ showArrow = true, children, ...props }: NavigationMenuProps) {
  return (
    <Root {...props} className={styles.root}>
      <List className={styles.list}>
        {children}
        {showArrow && (
          <Indicator className={styles.indicator}>
            <div className={styles.arrow} />
          </Indicator>
        )}
      </List>
      <div className={styles.wrapper}>
        <Viewport className={styles.viewport} />
      </div>
    </Root>
  );
}

export function NavigationMenuItem({ children, className, ...props }: NavigationMenuItemProps) {
  return (
    <Item {...props} className={classNames(styles.item, className)}>
      {children}
    </Item>
  );
}

export function NavigationMenuTrigger({
  children,
  className,
  ...props
}: NavigationMenuTriggerProps) {
  return (
    <Trigger {...props} className={classNames(styles.trigger, className)}>
      {children}
      <Icon rotate={90} size="xs">
        <Icons.Chevron />
      </Icon>
    </Trigger>
  );
}

export function NavigationMenuContent({
  children,
  className,
  ...props
}: NavigationMenuContentProps) {
  return (
    <Content {...props} className={classNames(styles.content, className)}>
      {children}
    </Content>
  );
}
export function NavigationMenuLink({ children, className, ...props }: NavigationMenuLinkProps) {
  return (
    <Link {...props} className={classNames(styles.link, className)}>
      {children}
    </Link>
  );
}
