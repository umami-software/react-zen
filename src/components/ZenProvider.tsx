import { ReactNode } from 'react';
import { ToastProvider, ToastProviderProps, Toaster } from '@/components/Toast';

interface ZenProviderProps {
  config?: {
    toast?: ToastProviderProps;
  };
  children: ReactNode;
}
function ZenProvider({ config = {}, children }: ZenProviderProps) {
  const { toast } = config;

  return (
    <ToastProvider {...toast}>
      {children}
      <Toaster />
    </ToastProvider>
  );
}

export { ZenProvider };
export type { ZenProviderProps };
