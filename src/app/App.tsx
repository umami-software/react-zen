'use client';
import { ReactNode } from 'react';
import { Page } from '@/components';
import Header from '@/app/Header';
import useTheme from '@/components/hooks/useTheme';
import styles from './App.module.css';

export default function App({ children }: { children: ReactNode }) {
  const { setTheme } = useTheme();

  return (
    <Page>
      <div className={styles.page}>
        <Header>
          <button onClick={() => setTheme('zen')}>zen</button>
          <button onClick={() => setTheme('light')}>light</button>
          <button onClick={() => setTheme('dark')}>dark</button>
        </Header>
        <main>{children}</main>
      </div>
    </Page>
  );
}
