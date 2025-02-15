import { create } from 'zustand';

const initialState = {
  theme: 'light',
};

const store = create(() => ({ ...initialState }));

function setTheme(theme: string) {
  store.setState({ theme });

  document.documentElement.setAttribute('data-theme', theme);
}

function useTheme() {
  const { theme } = store();

  return { theme, setTheme };
}

export { useTheme };
