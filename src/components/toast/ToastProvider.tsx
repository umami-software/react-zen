import { createContext, ReactNode } from 'react';
import { Toaster, ToasterProps } from '@/components/toast/Toaster';

export interface ToastProviderProps extends ToasterProps {
  children: ReactNode;
}

export const ToastContext = createContext({});

export function ToastProvider({ children, ...config }: ToastProviderProps) {
  return (
    <ToastContext.Provider value={config}>
      {children}
      <Toaster {...config} />
    </ToastContext.Provider>
  );
}