'use client';
import { ReactNode } from 'react';
import { Page } from '@/components';
import Header from '@/app/Header';
import styles from './App.module.css';

export default function App({ children }: { children: ReactNode }) {
  return (
    <Page className={styles.page}>
      <Header />
      <main>{children}</main>
    </Page>
  );
}
