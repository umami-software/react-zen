import { createContext, type ReactNode } from 'react';
import { Toaster, type ToasterProps } from '@/components/toast/Toaster';

export interface ToastProviderProps extends ToasterProps {
  children: ReactNode;
}

export const ToastContext = createContext({});

export function ToastProvider({ children, ...props }: ToastProviderProps) {
  return (
    <ToastContext.Provider value={props}>
      {children}
      <Toaster {...props} />
    </ToastContext.Provider>
  );
}
