import { ReactNode } from 'react';
import { ToastProvider, ToastProviderProps, Toaster } from './Toast';
import '@/styles/zen.css';
import '@/styles/reset.css';
import '@/styles/base.css';

interface ZenProviderProps {
  config?: {
    theme?: string;
    colorScheme?: 'light' | 'dark' | 'system';
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
