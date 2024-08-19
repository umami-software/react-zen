import { create } from 'zustand';
import { ToastProps } from '../Toast';

let toastId = 1;

interface ToastState {
  id: number;
  message: string;
  props: ToastProps;
}

const initialState: { toasts: ToastState[] } = {
  toasts: [],
};

const store = create(() => ({ ...initialState }));

function removeToast(id: number) {
  // Have to let closing animations play out
  setTimeout(() => {
    store.setState(({ toasts }) => {
      return { toasts: toasts.filter(toast => toast.id !== id) };
    });
  }, 1000);
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

function useToast() {
  const { toasts } = useStore();

  return { toast, toasts };
}

export { useToast, toast };
