import { Menu as BaseMenu } from '@base-ui/react/menu';
import { Popover as BasePopover } from '@base-ui/react/popover';
import {
  Children,
  createContext,
  type HTMLAttributes,
  type Key,
  type ReactElement,
  type ReactNode,
  useContext,
  useState,
} from 'react';
import { Check, ChevronRight } from '@/components/icons';
import { Icon } from './Icon';
import type { Selection } from './lib/interaction';
import { cn } from './lib/tailwind';
import { MenuPrimitiveContext } from './OverlayTrigger';
import { Row } from './Row';
import { Text } from './Text';

interface MenuContextValue {
  selected: Set<Key>;
  select: (key: Key) => void;
}

const MenuContext = createContext<MenuContextValue>({
  selected: new Set(),
  select: () => undefined,
});

export interface MenuProps extends Omit<HTMLAttributes<HTMLDivElement>, 'onChange'> {
  selectionMode?: 'none' | 'single' | 'multiple';
  selectedKeys?: Iterable<Key>;
  defaultSelectedKeys?: Iterable<Key>;
  onSelectionChange?: (keys: Selection) => void;
}

export function Menu({
  className,
  children,
  selectionMode = 'none',
  selectedKeys,
  defaultSelectedKeys,
  onSelectionChange,
  ...props
}: MenuProps) {
  const [uncontrolled, setUncontrolled] = useState(new Set<Key>(defaultSelectedKeys));
  const useBasePrimitive = useContext(MenuPrimitiveContext);
  const selected = new Set<Key>(selectedKeys || uncontrolled);
  const select = (key: Key) => {
    if (selectionMode === 'none') {
      return;
    }
    const next = new Set(selectionMode === 'multiple' ? selected : []);
    if (next.has(key)) {
      next.delete(key);
    } else {
      next.add(key);
    }
    if (!selectedKeys) {
      setUncontrolled(next);
    }
    onSelectionChange?.(next);
  };

  const content = (
    <MenuContext.Provider value={{ selected, select }}>
      <div
        {...props}
        role="menu"
        className={cn(
          'min-w-[200px] p-2 border border-edge rounded-md shadow-lg bg-surface-base overflow-hidden outline-none',
          className,
        )}
      >
        {children}
      </div>
    </MenuContext.Provider>
  );

  if (useBasePrimitive) {
    return (
      <BaseMenu.Portal>
        <BaseMenu.Positioner>
          <BaseMenu.Popup
            render={content}
            className={cn(
              'min-w-[200px] p-2 border border-edge rounded-md shadow-lg bg-surface-base overflow-hidden outline-none',
              className,
            )}
          />
        </BaseMenu.Positioner>
      </BaseMenu.Portal>
    );
  }

  return content;
}

export interface MenuItemProps extends Omit<HTMLAttributes<HTMLDivElement>, 'id'> {
  id?: string | number;
  value?: string;
  icon?: ReactNode;
  label?: string;
  showChecked?: boolean;
  showSubMenuIcon?: boolean;
  isDisabled?: boolean;
  onAction?: (key: Key) => void;
}

export function MenuItem({
  id,
  value,
  icon,
  label,
  showChecked = true,
  showSubMenuIcon,
  isDisabled,
  onAction,
  children,
  className,
  onClick,
  ...props
}: MenuItemProps) {
  const context = useContext(MenuContext);
  const key = value || id || (typeof children === 'string' ? children : '');
  const isSelected = context.selected.has(key);
  const activate = () => {
    if (!isDisabled) {
      context.select(key);
      onAction?.(key);
    }
  };

  return (
    <div
      {...props}
      role="menuitem"
      tabIndex={isDisabled ? undefined : -1}
      aria-disabled={isDisabled || undefined}
      data-selected={isSelected || undefined}
      className={cn(
        'text-base flex items-center justify-between gap-3 px-2 py-1.5 rounded cursor-pointer outline-none w-full',
        'hover:bg-interactive focus:bg-interactive',
        'data-[disabled]:text-foreground-disabled',
        'data-[selected]:font-semibold',
        className,
      )}
      onClick={event => {
        onClick?.(event);
        if (!event.defaultPrevented) {
          activate();
        }
      }}
      onKeyDown={event => {
        props.onKeyDown?.(event);
        if (event.key === 'Enter' || event.key === ' ') {
          event.preventDefault();
          activate();
        }
      }}
    >
      <Row alignItems="center" gap>
        {icon && <Icon>{icon}</Icon>}
        {label && <Text>{label}</Text>}
        {children}
      </Row>
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
    </div>
  );
}

export function MenuSeparator({ className, ...props }: HTMLAttributes<HTMLHRElement>) {
  return <hr {...props} className={cn('border-b border-edge-muted my-2 -mx-2', className)} />;
}

export interface MenuSectionProps extends HTMLAttributes<HTMLDivElement> {
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
  return (
    <div
      {...props}
      role="group"
      className={cn('[&:not(:last-child)]:mb-4', className)}
      style={{ maxHeight, overflow: maxHeight ? 'auto' : undefined, ...style }}
    >
      {title && <div className="text-base font-bold px-2 py-1.5">{title}</div>}
      {children}
    </div>
  );
}

export interface SubmenuTriggerProps {
  children?: ReactNode;
}

export function SubMenuTrigger({ children }: SubmenuTriggerProps) {
  const items = Children.toArray(children) as ReactElement[];
  return (
    <BasePopover.Root>
      <BasePopover.Trigger render={items[0]} />
      {items[1]}
    </BasePopover.Root>
  );
}
