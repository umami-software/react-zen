'use client';
import { ReactNode } from 'react';
import { Header } from '@/app/Header';
import { Footer } from '@/app/Footer';
import { ZenProvider, Container } from '@/components';
import styles from './App.module.css';

export function App({ children }: { children: ReactNode }) {
  return (
    <ZenProvider toast={{ duration: 3000 }}>
      <Container className={styles.app}>
        <Header />
        <main className={styles.body}>{children}</main>
        <Footer />
      </Container>
    </ZenProvider>
  );
}
