import { create } from 'zustand';
import { themes } from '@/lib/themes';

const initialState = {
  name: 'zen',
  style: themes.zen,
};

const store = create(() => ({ ...initialState }));

export const useStore = store;

function setTheme(name: string) {
  store.setState({ name, style: themes[name] });

  document.body.setAttribute('data-theme', name);
}

export default function useTheme() {
  const theme = useStore();

  return { theme, setTheme };
}
