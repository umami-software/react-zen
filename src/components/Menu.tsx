import type { ReactNode } from 'react';
import {
  Menu as AriaMenu,
  MenuItem as AriaMenuItem,
  type MenuItemProps as AriaMenuItemProps,
  type MenuProps as AriaMenuProps,
  MenuSection as AriaMenuSection,
  type MenuSectionProps as AriaMenuSectionProps,
  SubmenuTrigger as AriaSubmenuTrigger,
  type SubmenuTriggerProps as AriaSubmenuTriggerProps,
  Header,
  Separator,
  type SeparatorProps,
} from 'react-aria-components';
import { IconLabel } from '@/components/IconLabel';
import { Check, ChevronRight } from '@/components/icons';
import { Icon } from './Icon';
import { cn } from './lib/tailwind';

export interface MenuProps extends AriaMenuProps<any> {
  className?: string;
  children?: ReactNode;
}

export function Menu({ className, children, ...props }: MenuProps) {
  return (
    <AriaMenu
      {...props}
      className={cn(
        'min-w-[200px] p-2 border border-edge rounded-md shadow-lg bg-surface-base overflow-hidden outline-none',
        className,
      )}
    >
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
    <AriaMenuItem
      {...props}
      className={cn(
        'text-base flex items-center justify-between gap-3 text-base px-2 py-1.5 rounded cursor-pointer outline-none w-full',
        'hover:bg-interactive',
        'data-[focus]:bg-interactive',
        'data-[disabled]:text-content-disabled',
        'data-[selected]:font-semibold',
        className,
      )}
    >
      {({ isSelected }) => (
        <>
          <IconLabel icon={icon} label={label}>
            {children as any}
          </IconLabel>
          {showChecked && isSelected && (
            <Icon aria-hidden="true">
              <Check />
            </Icon>
          )}
          {showSubMenuIcon && (
            <Icon aria-hidden="true">
              <ChevronRight />
            </Icon>
          )}
        </>
      )}
    </AriaMenuItem>
  );
}

export function MenuSeparator({ className, ...props }: SeparatorProps) {
  return (
    <Separator
      {...props}
      className={cn('border-b border-edge-muted my-2 -mx-2', className)}
    />
  );
}

export interface MenuSectionProps extends AriaMenuSectionProps<any> {
  title?: string;
  maxHeight?: number;
}

export function MenuSection({
  title,
  maxHeight,
  className,
  style,
  children,
  ...props
}: MenuSectionProps) {
  const sectionStyle = {
    maxHeight,
    overflow: maxHeight ? 'auto' : undefined,
  };

  return (
    <>
      {title && <Header className="text-base font-bold px-2 py-1.5">{title}</Header>}
      <AriaMenuSection
        {...props}
        className={cn('[&:not(:last-child)]:mb-4', className)}
        style={{ ...sectionStyle, ...style }}
      >
        {children as any}
      </AriaMenuSection>
    </>
  );
}

export interface SubmenuTriggerProps extends AriaSubmenuTriggerProps {}

export function SubMenuTrigger({ children, ...props }: SubmenuTriggerProps) {
  return <AriaSubmenuTrigger {...props}>{children}</AriaSubmenuTrigger>;
}
