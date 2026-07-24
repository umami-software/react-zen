import {
  type AnchorHTMLAttributes,
  createContext,
  type HTMLAttributes,
  type MouseEvent,
  type ReactNode,
  useContext,
  useState,
} from 'react';
import { PanelLeft } from '@/components/icons';
import { Button, type ButtonProps } from './Button';
import { Icon } from './Icon';
import { cn } from './lib/tailwind';
import { sidebar } from './variants';

interface SidebarContextValue {
  isCollapsed: boolean;
  toggle: () => void;
}

const SidebarContext = createContext<SidebarContextValue>({
  isCollapsed: false,
  toggle: () => undefined,
});

export function useSidebar() {
  return useContext(SidebarContext);
}

export interface SidebarProps extends HTMLAttributes<HTMLElement> {
  isCollapsed?: boolean;
  defaultCollapsed?: boolean;
  onCollapseChange?: (collapsed: boolean) => void;
}

export function Sidebar({
  isCollapsed,
  defaultCollapsed,
  onCollapseChange,
  className,
  children,
  ...props
}: SidebarProps) {
  const [uncontrolledCollapsed, setUncontrolledCollapsed] = useState(defaultCollapsed ?? false);
  const collapsed = isCollapsed ?? uncontrolledCollapsed;
  const toggle = () => {
    if (isCollapsed === undefined) {
      setUncontrolledCollapsed(!collapsed);
    }
    onCollapseChange?.(!collapsed);
  };

  return (
    <SidebarContext.Provider value={{ isCollapsed: collapsed, toggle }}>
      <aside
        {...props}
        data-collapsed={collapsed || undefined}
        className={cn(sidebar().root(), className)}
      >
        {children}
      </aside>
    </SidebarContext.Provider>
  );
}

export function SidebarHeader({ className, children, ...props }: HTMLAttributes<HTMLDivElement>) {
  return (
    <div {...props} className={cn(sidebar().header(), className)}>
      {children}
    </div>
  );
}

export function SidebarContent({ className, children, ...props }: HTMLAttributes<HTMLDivElement>) {
  return (
    <div {...props} className={cn(sidebar().content(), className)}>
      {children}
    </div>
  );
}

export function SidebarFooter({ className, children, ...props }: HTMLAttributes<HTMLDivElement>) {
  return (
    <div {...props} className={cn(sidebar().footer(), className)}>
      {children}
    </div>
  );
}

export interface SidebarGroupProps extends HTMLAttributes<HTMLDivElement> {
  title?: string;
}

export function SidebarGroup({ title, className, children, ...props }: SidebarGroupProps) {
  const { isCollapsed } = useSidebar();

  return (
    <div {...props} role="group" className={cn(sidebar().group(), className)}>
      {title && !isCollapsed && <div className={sidebar().groupTitle()}>{title}</div>}
      {children}
    </div>
  );
}

export interface SidebarItemProps extends Omit<AnchorHTMLAttributes<HTMLElement>, 'onClick'> {
  icon?: ReactNode;
  label?: string;
  href?: string;
  isSelected?: boolean;
  isDisabled?: boolean;
  onPress?: (event: MouseEvent<HTMLElement>) => void;
}

export function SidebarItem({
  icon,
  label,
  href,
  isSelected,
  isDisabled,
  onPress,
  className,
  children,
  ...props
}: SidebarItemProps) {
  const { isCollapsed } = useSidebar();
  const Element = href && !isDisabled ? 'a' : 'button';

  return (
    <Element
      {...props}
      href={href && !isDisabled ? href : undefined}
      type={Element === 'button' ? 'button' : undefined}
      disabled={Element === 'button' ? isDisabled : undefined}
      aria-current={isSelected ? 'page' : undefined}
      data-selected={isSelected || undefined}
      data-disabled={isDisabled || undefined}
      title={isCollapsed ? label : undefined}
      className={cn(sidebar().item(), isCollapsed && 'justify-center px-0', className)}
      onClick={isDisabled ? undefined : onPress}
    >
      {icon && <Icon size="sm">{icon}</Icon>}
      {!isCollapsed && (
        <>
          {label}
          {children}
        </>
      )}
    </Element>
  );
}

export interface SidebarToggleProps extends ButtonProps {}

export function SidebarToggle({ onPress, ...props }: SidebarToggleProps) {
  const { isCollapsed, toggle } = useSidebar();

  return (
    <Button
      variant="quiet"
      aria-label={isCollapsed ? 'Expand sidebar' : 'Collapse sidebar'}
      {...props}
      onPress={event => {
        toggle();
        onPress?.(event);
      }}
    >
      <Icon size="sm">
        <PanelLeft />
      </Icon>
    </Button>
  );
}
