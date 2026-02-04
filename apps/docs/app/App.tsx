'use client';
import type { ReactNode } from 'react';
import { Footer } from '@/app/Footer';
import { Header } from '@/app/Header';
import { Box, Column, Container, ZenProvider } from '@/components';

export function App({ children }: { children: ReactNode }) {
  return (
    <ZenProvider>
      <Container>
        <Column minHeight="100vh">
          <Header />
          <Box flexGrow="1" as="main">
            {children}
          </Box>
          <Footer />
        </Column>
      </Container>
    </ZenProvider>
  );
}
