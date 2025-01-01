import classNames from 'classnames';
import { Dialog } from './Dialog';
import { Modal, ModalProps } from './Modal';
import styles from './Sheet.module.css';

export interface SheetProps extends ModalProps {
  position: 'top' | 'bottom' | 'left' | 'right';
  modalOffset?: string;
  children: any;
}

export function Sheet({
  position = 'bottom',
  modalOffset = '50%',
  className,
  style = {},
  children,
  ...props
}: SheetProps) {
  if (modalOffset) {
    // @ts-ignore
    style[`--modal-offset`] = modalOffset;
  }
  console.log({ style });
  return (
    <Modal
      {...props}
      position={position}
      className={classNames(styles.modal, className)}
      style={style}
    >
      <Dialog className={classNames(styles.sheet, position && styles[position])}>
        {dialogProps => {
          return typeof children === 'function' ? children(dialogProps) : children;
        }}
      </Dialog>
    </Modal>
  );
}
