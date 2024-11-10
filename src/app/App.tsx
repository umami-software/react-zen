'use client';
import { ReactNode } from 'react';
import { Page } from '@/components';
import { Header } from '@/app/Header';
import { Footer } from '@/app/Footer';
import { ZenProvider } from '@/components';
import { Container } from '@/components/Container';
import styles from './App.module.css';

export function App({ children }: { children: ReactNode }) {
  return (
    <ZenProvider config={{ toast: { duration: 3000 } }}>
      <Page className={styles.page}>
        <Container>
          <Header />
          <main className={styles.body}>{children}</main>
          <Footer />
        </Container>
      </Page>
    </ZenProvider>
  );
}
