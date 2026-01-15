import { Inter } from 'next/font/google';
import { Head } from 'nextra/components';
import { getPageMap } from 'nextra/page-map';
import { Footer, Layout, Navbar } from 'nextra-theme-docs';
import type { ReactNode } from 'react';
import { ZenProvider } from '@/components';
import 'nextra-theme-docs/style.css';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'zen - React Component Library',
  description: 'A modern, minimalist React component library',
};

const navbar = (
  <Navbar logo={<b>zen</b>} projectLink="https://github.com/umami-software/react-zen" />
);

const footer = <Footer>MIT {new Date().getFullYear()} © Umami Software.</Footer>;

export default async function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" dir="ltr" suppressHydrationWarning>
      <Head />
      <body className={inter.className}>
        <ZenProvider>
          <Layout
            navbar={navbar}
            pageMap={await getPageMap()}
            docsRepositoryBase="https://github.com/umami-software/react-zen/tree/main/docs"
            footer={footer}
          >
            {children}
          </Layout>
        </ZenProvider>
      </body>
    </html>
  );
}
