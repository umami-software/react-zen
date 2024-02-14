'use client';
import { ReactNode, useState } from 'react';
import { ThemeProvider, Page } from '@/components';

export default function App({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState('zen');

  const handleClick = () => setTheme(theme === 'light' ? 'dark' : 'light');

  console.log('App', theme);

  return (
    <ThemeProvider theme={theme}>
      <Page>
        <button onClick={handleClick}>{theme}</button>
        {children}
      </Page>
    </ThemeProvider>
  );
}
