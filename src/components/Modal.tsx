import { ReactNode } from 'react';
import {
  Modal as AriaModal,
  ModalOverlay as AriaModalOverlay,
  ModalOverlayProps as AriaModalOverlayProps,
  ModalRenderProps,
} from 'react-aria-components';
import { cn } from './lib/tailwind';
import './Modal.css';

interface ModalProps extends AriaModalOverlayProps {
  placement?: 'center' | 'top' | 'bottom' | 'left' | 'right' | 'fullscreen';
  offset?: string;
  children?: ReactNode | ((values: ModalRenderProps & { defaultChildren: ReactNode }) => ReactNode);
}

const placementClasses = {
  center: 'modal-center',
  left: 'modal-left absolute inset-y-0 left-0 m-auto w-[calc(100dvw-var(--modal-offset,0))]',
  right: 'modal-right absolute inset-y-0 right-0 m-auto w-[calc(100dvw-var(--modal-offset,0))]',
  top: 'modal-top absolute inset-x-0 top-0 m-auto h-[calc(100dvh-var(--modal-offset,0))]',
  bottom: 'modal-bottom absolute inset-x-0 bottom-0 m-auto h-[calc(100dvh-var(--modal-offset,0))]',
  fullscreen: 'modal-fullscreen w-dvw h-dvh rounded-none',
};

function Modal({
  placement = 'center',
  offset,
  children,
  className,
  style = {},
  ...props
}: ModalProps) {
  if (offset) {
    // @ts-ignore
    style[`--modal-offset`] = offset;
  }

  return (
    <AriaModalOverlay
      {...props}
      className="modal-overlay fixed inset-0 bg-black/80 flex items-center justify-center z-[9999]"
      style={style}
      isDismissable
    >
      <AriaModal className={cn('relative z-[9999]', placementClasses[placement], className)}>
        {children}
      </AriaModal>
    </AriaModalOverlay>
  );
}

export { Modal };
export type { ModalProps };
