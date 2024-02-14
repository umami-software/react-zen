import { createContext, ReactNode } from 'react';
import type { Theme } from '@stylexjs/stylex';
import { zen } from '@/themes/zen';
import { light } from '@/themes/light';
import { dark } from '@/themes/dark';

const themes: { [key: string]: Theme<any, any> } = {
  zen,
  light,
  dark,
};

export const ThemeContext = createContext<Theme<any, any>>(zen);

export function ThemeProvider({ theme, children }: { theme: string; children: ReactNode }) {
  const styles = themes[theme];

  console.log('ThemeProvider', { theme, themes, styles });

  return <ThemeContext.Provider value={styles}>{children}</ThemeContext.Provider>;
}

export default ThemeProvider;
