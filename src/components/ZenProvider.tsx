import type { ReactNode } from 'react';
import { type Palette, type Theme, useInitTheme } from '@/components/hooks/useTheme';
import type { ToasterProps } from '@/components/toast/Toaster';
import { ToastProvider } from '@/components/toast/ToastProvider';

const defaultToastConfig = {
  duration: 3000,
};

export interface ZenProviderProps {
  theme?: Theme;
  colorScheme?: 'light' | 'dark' | 'system';
  palette?: Palette;
  toast?: ToasterProps;
  children: ReactNode;
}

export function ZenProvider({
  children,
  theme,
  colorScheme,
  palette,
  toast = defaultToastConfig,
}: ZenProviderProps) {
  useInitTheme(theme, colorScheme, palette);

  return <ToastProvider {...toast}>{children}</ToastProvider>;
}
