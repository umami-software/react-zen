import { useEffect, useLayoutEffect } from 'react';
import { create } from 'zustand';

export type Theme = 'light' | 'dark';

interface ThemeState {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  syncTheme: () => void;
  initTheme: (preferred?: Theme, colorScheme?: 'light' | 'dark' | 'system') => void;
}

// Use 'theme' key to sync with next-themes (used by Nextra)
const STORAGE_KEY = 'theme';

function getThemeFromDOM(): Theme {
  if (typeof window === 'undefined') return 'light';
  return document.documentElement.classList.contains('dark') ? 'dark' : 'light';
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

function applyTheme(theme: Theme) {
  if (typeof window === 'undefined') return;
  document.documentElement.setAttribute('data-theme', theme);
  if (theme === 'dark') {
    document.documentElement.classList.add('dark');
  } else {
    document.documentElement.classList.remove('dark');
  }
}

export const useTheme = create<ThemeState>((set, get) => ({
  theme: 'light',
  setTheme: theme => {
    set({ theme });
    if (typeof window !== 'undefined') {
      localStorage.setItem(STORAGE_KEY, theme);
      applyTheme(theme);
    }
  },
  syncTheme: () => {
    // Sync state from DOM (when next-themes changes the theme)
    const theme = getThemeFromDOM();
    if (theme !== get().theme) {
      set({ theme });
      document.documentElement.setAttribute('data-theme', theme);
    }
  },
  initTheme: (preferred?: Theme, colorScheme?: 'light' | 'dark' | 'system') => {
    if (typeof window === 'undefined') return;

    const stored = localStorage.getItem(STORAGE_KEY) as Theme | null;
    const initial = resolveTheme(preferred || stored || undefined, colorScheme);

    set({ theme: initial });
    applyTheme(initial);
  },
}));

export function useInitTheme(preferred?: Theme, colorScheme?: 'light' | 'dark' | 'system') {
  const initTheme = useTheme(s => s.initTheme);
  const syncTheme = useTheme(s => s.syncTheme);

  useLayoutEffect(() => {
    initTheme(preferred, colorScheme);
  }, [preferred, colorScheme, initTheme]);

  // Watch for DOM changes from next-themes
  useEffect(() => {
    if (typeof window === 'undefined') return;

    const observer = new MutationObserver(mutations => {
      for (const mutation of mutations) {
        if (mutation.attributeName === 'class') {
          syncTheme();
        }
      }
    });

    observer.observe(document.documentElement, { attributes: true });

    return () => observer.disconnect();
  }, [syncTheme]);
}
