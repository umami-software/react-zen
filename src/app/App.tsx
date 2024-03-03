'use client';
import { ReactNode } from 'react';
import { Page, Button } from '@/components';
import Header from '@/app/Header';
import useTheme from '@/components/hooks/useTheme';
import styles from './App.module.css';

export default function App({ children }: { children: ReactNode }) {
  const { setTheme } = useTheme();

  return (
    <Page>
      <div className={styles.page}>
        <Header>
          <Button size={1} onClick={() => setTheme('zen')}>
            zen
          </Button>
          <Button size={1} onClick={() => setTheme('light')}>
            light
          </Button>
          <Button size={1} onClick={() => setTheme('dark')}>
            dark
          </Button>
        </Header>
        <main>{children}</main>
      </div>
    </Page>
  );
}
