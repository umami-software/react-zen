import { ReactNode } from 'react';
import { ToastProvider, ToastProviderProps, Toaster } from './Toast';

interface ZenProviderProps {
  theme?: string;
  colorScheme?: 'light' | 'dark' | 'system';
  toast?: ToastProviderProps;
  children: ReactNode;
}

function ZenProvider({ children, ...props }: ZenProviderProps) {
  const { toast } = props;

  return (
    <ToastProvider {...toast}>
      {children}
      <Toaster />
    </ToastProvider>
  );
}

export { ZenProvider };
export type { ZenProviderProps };
