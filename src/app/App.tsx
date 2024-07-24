'use client';
import { ReactNode } from 'react';
import { Page } from '@/components';
import Header from '@/app/Header';
import Footer from '@/app/Footer';
import { ZenProvider } from '@/components';
import styles from './App.module.css';

export default function App({ children }: { children: ReactNode }) {
  return (
    <ZenProvider>
      <Page className={styles.page}>
        <Header />
        <main className={styles.body}>{children}</main>
        <Footer />
      </Page>
    </ZenProvider>
  );
}
