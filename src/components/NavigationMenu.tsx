import React, { HTMLAttributes, ReactNode } from 'react';
import classNames from 'classnames';
import { Text } from './Text';
import { Icon } from './Icon';
import { Icons } from './Icons';
import { HoverTrigger } from './HoverTrigger';
import styles from './NavigationMenu.module.css';

export interface NavigationMenuProps extends HTMLAttributes<HTMLElement> {
  showArrow?: boolean;
}

export function NavigationMenu({
  showArrow = true,
  className,
  children,
  ...props
}: NavigationMenuProps) {
  return (
    <div {...props} className={classNames(styles.nav, className)}>
      {children}
    </div>
  );
}

export interface NavigationMenuItemProps extends HTMLAttributes<HTMLElement> {
  label: string;
  children?: ReactNode;
}

export function NavigationMenuItem({
  label,
  children,
  className,
  ...props
}: NavigationMenuItemProps) {
  if (label) {
    return (
      <HoverTrigger>
        <div {...props} className={classNames(styles.item, className)}>
          <Text>{label}</Text>
          <Icon rotate={90} size="xs" className={styles.icon}>
            <Icons.Chevron />
          </Icon>
        </div>
        {children as any}
      </HoverTrigger>
    );
  }

  return (
    <div {...props} className={classNames(styles.item, className)}>
      {children}
    </div>
  );
}
