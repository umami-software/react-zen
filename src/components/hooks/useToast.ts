import { create } from 'zustand';
import { useContext } from 'react';
import { ToastContext } from '@/components/toast/ToastProvider';

let TOAST_ID = 1;
const TOAST_DURATION = 0;

export interface ToastOptions {
  duration?: number;
  title?: string;
  actions?: string[];
  allowClose?: boolean;
  variant?: 'info' | 'error';
  onClose?: (action?: string) => void;
}

export interface ToastState extends ToastOptions {
  id: string;
  message: string;
}

const initialState: { duration: number; toasts: ToastState[] } = {
  duration: TOAST_DURATION,
  toasts: [],
};

const store = create(() => ({ ...initialState }));

export function removeToast(id: string) {
  store.setState(({ toasts }) => {
    return { toasts: toasts.filter(toast => toast.id !== id) };
  });
}

function displayToast(
  message: string,
  { duration = TOAST_DURATION, ...options }: ToastOptions = {},
) {
  const id = `toast-${TOAST_ID++}`;

  store.setState(({ toasts }) => {
    return {
      toasts: [...toasts, { ...options, id, message }],
    };
  });
}

const useStore = store;

export function useToast() {
  const { toasts } = useStore();
  const config = useContext(ToastContext);

  const toast = (message: string, options?: ToastOptions) => {
    displayToast(message, { ...options, ...config });
  };

  return { toast, toasts };
}
