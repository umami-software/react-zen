import { create } from 'zustand';

const initialState: { menu: string } = { menu: '' };

const store = create(() => ({ ...initialState }));

export function useMenu() {
  const { menu } = store();

  const setMenu = (menu: string) => {
    store.setState({ menu });
  };

  return { menu, setMenu };
}
