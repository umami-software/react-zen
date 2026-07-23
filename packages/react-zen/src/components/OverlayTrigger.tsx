'use client';

import { Dialog as BaseDialog } from '@base-ui/react/dialog';
import { Menu as BaseMenu } from '@base-ui/react/menu';
import { Popover as BasePopover } from '@base-ui/react/popover';
import { Tooltip as BaseTooltip } from '@base-ui/react/tooltip';
import {
  Children,
  cloneElement,
  createContext,
  isValidElement,
  type ReactElement,
  type ReactNode,
  useContext,
  useId,
  useState,
} from 'react';

export type OverlayKind = 'dialog' | 'popover' | 'menu' | 'tooltip';

export interface OverlayTarget {
  zenOverlayType?: OverlayKind;
}

interface OverlayContextValue {
  close: () => void;
}

const OverlayContext = createContext<OverlayContextValue>({ close: () => undefined });
export const MenuPrimitiveContext = createContext(false);

export function useOverlayTrigger() {
  return useContext(OverlayContext);
}

export interface DialogTriggerProps {
  children: ReactNode;
  isOpen?: boolean;
  defaultOpen?: boolean;
  onOpenChange?: (open: boolean) => void;
}

export function DialogTrigger({ children, isOpen, defaultOpen, onOpenChange }: DialogTriggerProps) {
  const items = Children.toArray(children) as ReactElement[];
  const trigger = items[0];
  const target = items[1] as ReactElement<any>;
  const targetOpen = target?.props?.isOpen as boolean | undefined;
  const targetOpenChange = target?.props?.onOpenChange as ((open: boolean) => void) | undefined;
  const [uncontrolledOpen, setUncontrolledOpen] = useState(defaultOpen ?? false);
  const controlledOpen = isOpen ?? targetOpen;
  const open = controlledOpen ?? uncontrolledOpen;
  const setOpen = (nextOpen: boolean) => {
    if (controlledOpen === undefined) {
      setUncontrolledOpen(nextOpen);
    }
    onOpenChange?.(nextOpen);
    targetOpenChange?.(nextOpen);
  };
  const content = (
    <OverlayContext.Provider value={{ close: () => setOpen(false) }}>
      {target}
    </OverlayContext.Provider>
  );

  return (
    <BaseDialog.Root open={open} onOpenChange={setOpen}>
      <BasePopover.Root open={open} onOpenChange={setOpen}>
        <BasePopover.Trigger render={trigger} />
        {content}
      </BasePopover.Root>
    </BaseDialog.Root>
  );
}

export interface TooltipTriggerProps {
  children: ReactNode;
  delay?: number;
  closeDelay?: number;
}

export function TooltipTrigger({ children, delay, closeDelay }: TooltipTriggerProps) {
  const items = Children.toArray(children) as ReactElement[];
  return (
    <BaseTooltip.Provider delay={delay} closeDelay={closeDelay}>
      <BaseTooltip.Root>
        <BaseTooltip.Trigger render={items[0]} />
        {items[1]}
      </BaseTooltip.Root>
    </BaseTooltip.Provider>
  );
}

export interface MenuTriggerProps {
  children: ReactNode;
  isOpen?: boolean;
  defaultOpen?: boolean;
  onOpenChange?: (open: boolean) => void;
}

export function MenuTrigger({ children, isOpen, defaultOpen, onOpenChange }: MenuTriggerProps) {
  const items = Children.toArray(children) as ReactElement[];
  const [uncontrolledOpen, setUncontrolledOpen] = useState(defaultOpen ?? false);
  const open = isOpen ?? uncontrolledOpen;
  const setOpen = (nextOpen: boolean) => {
    if (isOpen === undefined) {
      setUncontrolledOpen(nextOpen);
    }
    onOpenChange?.(nextOpen);
  };

  return (
    <BaseMenu.Root open={open} onOpenChange={setOpen}>
      <BasePopover.Root open={open} onOpenChange={setOpen}>
        <BasePopover.Trigger render={items[0]} />
        <MenuPrimitiveContext.Provider value>{items[1]}</MenuPrimitiveContext.Provider>
      </BasePopover.Root>
    </BaseMenu.Root>
  );
}

export interface FileTriggerProps {
  children: ReactElement;
  acceptedFileTypes?: string[];
  allowsMultiple?: boolean;
  onSelect?: (files: FileList | null) => void;
}

export function FileTrigger({
  children,
  acceptedFileTypes,
  allowsMultiple,
  onSelect,
}: FileTriggerProps) {
  const inputId = useId();
  return (
    <>
      {isValidElement(children) &&
        cloneElement(children, {
          onClick: () => document.getElementById(inputId)?.click(),
        } as object)}
      <input
        id={inputId}
        className="sr-only"
        type="file"
        accept={acceptedFileTypes?.join(',')}
        multiple={allowsMultiple}
        onChange={event => onSelect?.(event.target.files)}
      />
    </>
  );
}

export function Focusable({ children }: { children: ReactElement }) {
  const element = children as ReactElement<any>;
  return cloneElement(element, { tabIndex: element.props.tabIndex ?? 0 } as object);
}

export function Pressable({
  children,
  onPress,
}: {
  children: ReactElement;
  onPress?: (event: import('react').MouseEvent<HTMLElement>) => void;
}) {
  return cloneElement(children, { onClick: onPress } as object);
}

export function RouterProvider({ children }: { children?: ReactNode }) {
  return children;
}
