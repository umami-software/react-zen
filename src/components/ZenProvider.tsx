import { ReactNode } from 'react';
import { ToastProvider } from '@/components/toast/ToastProvider';
import { ToasterProps } from '@/components/toast/Toaster';

const defaultToastCofig = {
  duration: 3000,
};

interface ZenProviderProps {
  theme?: string;
  colorScheme?: 'light' | 'dark' | 'system';
  toast?: ToasterProps;
  children: ReactNode;
}

function ZenProvider({ children, ...props }: ZenProviderProps) {
  const { toast = defaultToastCofig } = props;

  return <ToastProvider {...toast}>{children}</ToastProvider>;
}

export { ZenProvider };
export type { ZenProviderProps };
