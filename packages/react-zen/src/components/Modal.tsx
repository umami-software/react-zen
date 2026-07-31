import { AlertDialog as BaseAlertDialog } from '@base-ui/react/alert-dialog';
import { Dialog as BaseDialog } from '@base-ui/react/dialog';
import type { CSSProperties, ReactNode } from 'react';
import { cn } from './lib/tailwind';
import { type OverlayTarget, useOverlayTrigger } from './OverlayTrigger';
import './Modal.css';
import './Overlay.css';

export interface ModalProps extends BaseDialog.Portal.Props {
  children?: ReactNode;
  isOpen?: boolean;
  onOpenChange?: (open: boolean) => void;
  placement?: 'center' | 'fullscreen';
  className?: string;
  style?: CSSProperties;
}

const placementClasses = {
  center: 'zen-modal-center',
  fullscreen: 'zen-modal-fullscreen w-dvw h-dvh rounded-none',
};

export function Modal({
  placement = 'center',
  children,
  className,
  style,
  isOpen: _isOpen,
  onOpenChange: _onOpenChange,
  ...props
}: ModalProps) {
  const { kind } = useOverlayTrigger();
  const popupClassName = cn('relative', placementClasses[placement], className);

  if (kind === 'alert-dialog') {
    return (
      <BaseAlertDialog.Portal {...props}>
        <BaseAlertDialog.Backdrop className="zen-modal-overlay zen-layer-backdrop fixed inset-0 bg-black/80" />
        <BaseAlertDialog.Viewport className="zen-layer-modal fixed inset-0 flex items-center justify-center">
          <BaseAlertDialog.Popup className={popupClassName} style={style}>
            {children}
          </BaseAlertDialog.Popup>
        </BaseAlertDialog.Viewport>
      </BaseAlertDialog.Portal>
    );
  }

  return (
    <BaseDialog.Portal {...props}>
      <BaseDialog.Backdrop className="zen-modal-overlay zen-layer-backdrop fixed inset-0 bg-black/80" />
      <BaseDialog.Viewport className="zen-layer-modal fixed inset-0 flex items-center justify-center">
        <BaseDialog.Popup className={popupClassName} style={style}>
          {children}
        </BaseDialog.Popup>
      </BaseDialog.Viewport>
    </BaseDialog.Portal>
  );
}

(Modal as typeof Modal & OverlayTarget).zenOverlayType = 'dialog';
