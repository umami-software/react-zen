import { ReactNode } from 'react';
import { ToastProvider } from '@/components/toast/ToastProvider';
import { ToasterProps } from '@/components/toast/Toaster';
import { useInitTheme, Theme } from '@/components/hooks/useTheme';

const defaultToastConfig = {
  duration: 3000,
};

interface ZenProviderProps {
  theme?: Theme;
  colorScheme?: 'light' | 'dark' | 'system';
  toast?: ToasterProps;
  children: ReactNode;
}

function ZenProvider({
  children,
  theme,
  colorScheme,
  toast = defaultToastConfig,
}: ZenProviderProps) {
  useInitTheme(theme, colorScheme);

  return <ToastProvider {...toast}>{children}</ToastProvider>;
}

export { ZenProvider };
export type { ZenProviderProps };
