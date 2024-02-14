import { create } from 'zustand';

const initialState = {};

const store = create(() => ({ ...initialState }));

export default function useTheme() {
  const theme = store.getState();

  function setTheme(theme: string) {
    store.setState(theme);
  }

  return { theme, setTheme };
}
