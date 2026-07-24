import { ContextMenu as BaseContextMenu } from '@base-ui/react/context-menu';
import { Children, type ReactElement, type ReactNode } from 'react';
import { MenuPrimitiveContext } from './OverlayTrigger';

export interface ContextMenuProps {
  children: ReactNode;
  onOpenChange?: (open: boolean) => void;
}

export function ContextMenu({ children, onOpenChange }: ContextMenuProps) {
  const items = Children.toArray(children) as ReactElement[];

  return (
    <BaseContextMenu.Root onOpenChange={onOpenChange}>
      <BaseContextMenu.Trigger render={items[0]} />
      <MenuPrimitiveContext.Provider value>{items[1]}</MenuPrimitiveContext.Provider>
    </BaseContextMenu.Root>
  );
}
