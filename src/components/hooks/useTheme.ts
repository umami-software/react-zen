import { create } from 'zustand';
import { useEffect } from 'react';

function getDefaultTheme() {
  return typeof window !== 'undefined'
    ? window?.matchMedia('(prefers-color-scheme: dark)')?.matches
      ? 'dark'
      : 'light'
    : 'light';
}

const initialState = {
  theme: getDefaultTheme(),
};

const store = create(() => ({ ...initialState }));

function setTheme(theme: string) {
  store.setState({ theme });

  document.documentElement.setAttribute('data-theme', theme);
}

export function useTheme(defaultTheme?: string) {
  const { theme } = store();

  useEffect(() => {
    if (defaultTheme) {
      setTheme(defaultTheme);
    }
  }, [defaultTheme]);

  return { theme, setTheme };
}
