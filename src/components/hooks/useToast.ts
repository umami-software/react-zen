import { create } from 'zustand';
import { ToastProps } from '@/components/Toast';

let toastId = 1;

export interface ToastState {
  id: number;
  message: string;
  props: ToastProps;
}

const initialState: { toasts: ToastState[] } = {
  toasts: [],
};

const store = create(() => ({ ...initialState }));

function removeToast(id: number) {
  store.setState(({ toasts }) => {
    return { toasts: toasts.filter(toast => toast.id !== id) };
  });
}

function toast(message: string, props: ToastProps = {}) {
  const id = toastId++;

  const handleOpenChange = () => {
    removeToast(id);
  };

  store.setState(({ toasts }) => {
    return {
      toasts: toasts.concat({ id, message, props: { ...props, onOpenChange: handleOpenChange } }),
    };
  });
}

const useStore = store;

export function useToast() {
  const { toasts } = useStore();

  return { toast, toasts };
}
