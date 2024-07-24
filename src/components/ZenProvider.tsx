import { ToastProvider, Toaster } from '@/components/Toast';

export function ZenProvider({ children }: { children: React.ReactNode }) {
  return (
    <ToastProvider>
      {children}
      <Toaster />
    </ToastProvider>
  );
}
