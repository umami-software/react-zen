import { ReactNode } from 'react';
import { ToastProvider, ToastProviderProps, Toaster } from '@/components/Toast';

export interface ZenProviderProps {
  config?: {
    toast?: ToastProviderProps;
  };
  children: ReactNode;
}

export function ZenProvider({ config = {}, children }: ZenProviderProps) {
  const { toast } = config;

  return (
    <ToastProvider {...toast}>
      {children}
      <Toaster />
    </ToastProvider>
  );
}
