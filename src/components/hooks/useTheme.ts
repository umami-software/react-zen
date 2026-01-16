import { useLayoutEffect } from 'react';
import { create } from 'zustand';

export type Theme = 'light' | 'dark';

interface ThemeState {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  initTheme: (preferred?: Theme, colorScheme?: 'light' | 'dark' | 'system') => void;
}

function resolveTheme(preferred?: Theme, colorScheme?: 'light' | 'dark' | 'system'): Theme {
  if (preferred) {
    return preferred;
  }
  if (colorScheme === 'light' || colorScheme === 'dark') {
    return colorScheme;
  }
  if (typeof window !== 'undefined' && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    return 'dark';
  }
  return 'light';
}

export const useTheme = create<ThemeState>((set, get) => ({
  theme: 'light',
  setTheme: theme => {
    set({ theme });
    if (typeof window !== 'undefined') {
      localStorage.setItem('zen.theme', theme);
      document.documentElement.setAttribute('data-theme', theme);
      // Also toggle .dark class for compatibility with Nextra/Tailwind dark mode
      if (theme === 'dark') {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
    }
  },
  initTheme: (preferred?: Theme, colorScheme?: 'light' | 'dark' | 'system') => {
    if (typeof window === 'undefined') return;

    const stored = localStorage.getItem('zen.theme') as Theme | null;
    const initial = resolveTheme(preferred || stored || undefined, colorScheme);

    set({ theme: initial });
    document.documentElement.setAttribute('data-theme', initial);
    // Also toggle .dark class for compatibility with Nextra/Tailwind dark mode
    if (initial === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  },
}));

export function useInitTheme(preferred?: Theme, colorScheme?: 'light' | 'dark' | 'system') {
  const initTheme = useTheme(s => s.initTheme);

  useLayoutEffect(() => {
    initTheme(preferred, colorScheme);
  }, [preferred, colorScheme, initTheme]);
}
