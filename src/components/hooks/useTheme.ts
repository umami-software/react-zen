import { create } from 'zustand';
import { useEffect } from 'react';

const initialState = {
  theme: 'light',
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
