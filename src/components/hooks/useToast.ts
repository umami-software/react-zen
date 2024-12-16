import { create } from 'zustand';
import { ToastProps } from '../Toast';

let TOAST_ID = 1;
const TOAST_DURATION = 3000;

interface ToastOptions {
  duration?: number;
  title?: string;
  actions?: string[];
  allowClose?: boolean;
  variant?: 'info' | 'error';
  onClose?: (action?: string) => void;
}

interface ToastState extends ToastOptions {
  id: string;
  message: string;
}

const initialState: { toasts: ToastState[] } = {
  toasts: [],
};

const store = create(() => ({ ...initialState }));

function removeToast(id: string) {
  store.setState(({ toasts }) => {
    return { toasts: toasts.filter(toast => toast.id !== id) };
  });
}

function toast(
  message: string,
  { onClose, duration = TOAST_DURATION, ...options }: ToastOptions = {},
) {
  const id = `toast-${TOAST_ID++}`;

  const handleClose = () => {
    onClose && onClose();

    removeToast(id);
  };

  store.setState(({ toasts }) => {
    return {
      toasts: [...toasts, { ...options, id, message, onClose: handleClose }],
    };
  });

  if (duration) {
    setTimeout(() => removeToast(id), duration);
  }
}

const useStore = store;

function useToast() {
  const { toasts } = useStore();

  return { toast, toasts };
}

export { useToast, toast };
export type { ToastProps };
