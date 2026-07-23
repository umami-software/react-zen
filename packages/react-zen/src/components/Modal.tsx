import { Dialog as BaseDialog } from '@base-ui/react/dialog';
import type { CSSProperties, ReactNode } from 'react';
import { cn } from './lib/tailwind';
import type { OverlayTarget } from './OverlayTrigger';
import './Modal.css';

export interface ModalProps extends BaseDialog.Portal.Props {
  children?: ReactNode;
  isOpen?: boolean;
  onOpenChange?: (open: boolean) => void;
  placement?: 'center' | 'top' | 'bottom' | 'left' | 'right' | 'fullscreen';
  offset?: string;
  className?: string;
  style?: CSSProperties;
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
  style,
  isOpen: _isOpen,
  onOpenChange: _onOpenChange,
  ...props
}: ModalProps) {
  const modalStyle = {
    ...style,
    ...(offset ? { '--modal-offset': offset } : {}),
  } as CSSProperties;

  return (
    <BaseDialog.Portal {...props}>
      <BaseDialog.Backdrop className="zen-modal-overlay fixed inset-0 bg-black/80 z-[9998]" />
      <BaseDialog.Viewport className="fixed inset-0 flex items-center justify-center z-[9999]">
        <BaseDialog.Popup
          className={cn('relative z-[9999]', placementClasses[placement], className)}
          style={modalStyle}
        >
          {children}
        </BaseDialog.Popup>
      </BaseDialog.Viewport>
    </BaseDialog.Portal>
  );
}

(Modal as typeof Modal & OverlayTarget).zenOverlayType = 'dialog';
