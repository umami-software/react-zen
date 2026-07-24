import { Dialog as BaseDialog } from '@base-ui/react/dialog';
import { Command as CommandPrimitive } from 'cmdk';
import type { ComponentProps, ReactNode } from 'react';
import { Search } from '@/components/icons';
import { Icon } from './Icon';
import { cn } from './lib/tailwind';
import { Modal } from './Modal';

export interface CommandProps extends ComponentProps<typeof CommandPrimitive> {}

export function Command({ className, children, ...props }: CommandProps) {
  return (
    <CommandPrimitive
      {...props}
      className={cn(
        'flex size-full flex-col overflow-hidden rounded-md bg-surface-base text-foreground-primary',
        className,
      )}
    >
      {children}
    </CommandPrimitive>
  );
}

export interface CommandInputProps extends ComponentProps<typeof CommandPrimitive.Input> {}

export function CommandInput({ className, ...props }: CommandInputProps) {
  return (
    <div className="flex items-center gap-3 border-b border-edge px-3">
      <Icon size="sm" className="shrink-0 text-foreground-muted">
        <Search />
      </Icon>
      <CommandPrimitive.Input
        {...props}
        className={cn(
          'flex h-11 w-full bg-transparent text-base outline-none',
          'placeholder:text-foreground-muted',
          'disabled:cursor-not-allowed disabled:text-foreground-disabled',
          className,
        )}
      />
    </div>
  );
}

export interface CommandListProps extends ComponentProps<typeof CommandPrimitive.List> {}

export function CommandList({ className, ...props }: CommandListProps) {
  return (
    <CommandPrimitive.List
      {...props}
      className={cn('max-h-[300px] overflow-y-auto overflow-x-hidden p-2', className)}
    />
  );
}

export interface CommandEmptyProps extends ComponentProps<typeof CommandPrimitive.Empty> {}

export function CommandEmpty({ className, ...props }: CommandEmptyProps) {
  return (
    <CommandPrimitive.Empty
      {...props}
      className={cn('py-6 text-center text-base text-foreground-muted', className)}
    />
  );
}

export interface CommandGroupProps extends ComponentProps<typeof CommandPrimitive.Group> {}

export function CommandGroup({ className, ...props }: CommandGroupProps) {
  return (
    <CommandPrimitive.Group
      {...props}
      className={cn(
        'overflow-hidden [&:not(:last-child)]:mb-2',
        '[&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-1.5',
        '[&_[cmdk-group-heading]]:text-sm [&_[cmdk-group-heading]]:font-bold [&_[cmdk-group-heading]]:text-foreground-muted',
        className,
      )}
    />
  );
}

export interface CommandItemProps
  extends Omit<ComponentProps<typeof CommandPrimitive.Item>, 'disabled'> {
  icon?: ReactNode;
  isDisabled?: boolean;
}

export function CommandItem({ icon, isDisabled, className, children, ...props }: CommandItemProps) {
  return (
    <CommandPrimitive.Item
      {...props}
      disabled={isDisabled}
      className={cn(
        'flex items-center gap-3 px-2 py-1.5 rounded cursor-pointer outline-none text-base',
        'data-[selected=true]:bg-interactive',
        'data-[disabled=true]:text-foreground-disabled data-[disabled=true]:cursor-default',
        className,
      )}
    >
      {icon && <Icon size="sm">{icon}</Icon>}
      {children}
    </CommandPrimitive.Item>
  );
}

export interface CommandSeparatorProps extends ComponentProps<typeof CommandPrimitive.Separator> {}

export function CommandSeparator({ className, ...props }: CommandSeparatorProps) {
  return (
    <CommandPrimitive.Separator
      {...props}
      className={cn('h-px bg-edge-muted my-2 -mx-2', className)}
    />
  );
}

export interface CommandDialogProps extends CommandProps {
  isOpen?: boolean;
  onOpenChange?: (open: boolean) => void;
}

export function CommandDialog({ isOpen, onOpenChange, children, ...props }: CommandDialogProps) {
  return (
    <BaseDialog.Root open={isOpen} onOpenChange={onOpenChange}>
      <Modal>
        <Command
          {...props}
          className={cn(
            'w-[32rem] max-w-[calc(100dvw-2rem)] border border-edge shadow-xl',
            props.className,
          )}
        >
          {children}
        </Command>
      </Modal>
    </BaseDialog.Root>
  );
}
