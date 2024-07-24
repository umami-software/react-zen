import { create } from 'zustand';

const initialState = {
  name: 'light',
};

const store = create(() => ({ ...initialState }));

function setTheme(name: string) {
  store.setState({ name });

  document.body.setAttribute('data-theme', name);
}

export function useTheme() {
  const theme = store.getState();

  return { theme, setTheme };
}
