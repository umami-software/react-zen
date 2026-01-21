import type { ReactNode } from 'react';
import { type Palette, type Theme, useInitTheme } from '@/components/hooks/useTheme';
import type { ToasterProps } from '@/components/toast/Toaster';
import { ToastProvider } from '@/components/toast/ToastProvider';

const defaultToastConfig = {
  duration: 3000,
};

interface ZenProviderProps {
  theme?: Theme;
  colorScheme?: 'light' | 'dark' | 'system';
  palette?: Palette;
  toast?: ToasterProps;
  children: ReactNode;
}

function ZenProvider({
  children,
  theme,
  colorScheme,
  palette,
  toast = defaultToastConfig,
}: ZenProviderProps) {
  useInitTheme(theme, colorScheme, palette);

  return <ToastProvider {...toast}>{children}</ToastProvider>;
}

export { ZenProvider };
export type { ZenProviderProps };
