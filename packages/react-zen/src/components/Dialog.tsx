import type { HTMLAttributes, ReactNode } from 'react';
import { Column } from './Column';
import { Heading } from './Heading';
import { cn } from './lib/tailwind';
import { useOverlayTrigger } from './OverlayTrigger';

export interface DialogRenderProps {
  close: () => void;
}

export interface DialogProps extends Omit<HTMLAttributes<HTMLDivElement>, 'title' | 'children'> {
  children?: ReactNode | ((props: DialogRenderProps) => ReactNode);
  title?: ReactNode;
  variant?: 'sheet';
}

export function Dialog({ title, variant, children, className, ...props }: DialogProps) {
  const { close } = useOverlayTrigger();

  return (
    <div
      aria-label={title ? undefined : 'Dialog'}
      role="dialog"
      {...props}
      className={cn(
        'p-6 shadow-xl bg-surface-base border border-edge rounded relative outline-none overflow-auto',
        variant === 'sheet' && 'w-full h-full p-0 border-0 rounded-none shadow-none z-[9999]',
        className,
      )}
    >
      <Column height="100%" gap>
        {title && <Heading size="xl">{title}</Heading>}
        {typeof children === 'function' ? children({ close }) : children}
      </Column>
    </div>
  );
}
