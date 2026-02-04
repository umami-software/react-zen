import type { ReactNode } from 'react';
import {
  Modal as AriaModal,
  ModalOverlay as AriaModalOverlay,
  type ModalOverlayProps as AriaModalOverlayProps,
  type ModalRenderProps,
} from 'react-aria-components';
import { cn } from './lib/tailwind';
import './Modal.css';

export interface ModalProps extends AriaModalOverlayProps {
  children?: ReactNode | ((values: ModalRenderProps & { defaultChildren: ReactNode }) => ReactNode);
  isOpen?: boolean;
  placement?: 'center' | 'top' | 'bottom' | 'left' | 'right' | 'fullscreen';
  offset?: string;
}

const placementClasses = {
  center: 'zen-modal-center',
  left: 'zen-modal-left absolute inset-y-0 left-0 m-auto w-[calc(100dvw-var(--modal-offset,0))]',
  right: 'zen-modal-right absolute inset-y-0 right-0 m-auto w-[calc(100dvw-var(--modal-offset,0))]',
  top: 'zen-modal-top absolute inset-x-0 top-0 m-auto h-[calc(100dvh-var(--modal-offset,0))]',
  bottom:
    'zen-modal-bottom absolute inset-x-0 bottom-0 m-auto h-[calc(100dvh-var(--modal-offset,0))]',
  fullscreen: 'zen-modal-fullscreen w-dvw h-dvh rounded-none',
};

export function Modal({
  placement = 'center',
  offset,
  children,
  className,
  style = {},
  ...props
}: ModalProps) {
  if (offset) {
    style[`--modal-offset` as keyof typeof style] = offset as never;
  }

  return (
    <AriaModalOverlay
      {...props}
      className="zen-modal-overlay fixed inset-0 bg-black/80 flex items-center justify-center z-[9999]"
      style={style}
      isDismissable
    >
      <AriaModal className={cn('relative z-[9999]', placementClasses[placement], className)}>
        {children}
      </AriaModal>
    </AriaModalOverlay>
  );
}
