'use client';
import { ReactNode } from 'react';
import { Header } from '@/app/Header';
import { Footer } from '@/app/Footer';
import { ZenProvider, Container, Box, Column } from '@/components';

export function App({ children }: { children: ReactNode }) {
  return (
    <ZenProvider toast={{ duration: 3000 }}>
      <Container className="booobb">
        <Column minHeight="100vh">
          <Header />
          <Box flexGrow={1} as="main">
            {children}
          </Box>
          <Footer />
        </Column>
      </Container>
    </ZenProvider>
  );
}
