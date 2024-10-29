import { create } from 'zustand';

const initialState: { activeMenu: any } = { activeMenu: null };

const store = create(() => ({ ...initialState }));

export function setActiveMenu(activeMenu: string) {
  store.setState({ activeMenu });
}

export const useNavigationMenu = store;
