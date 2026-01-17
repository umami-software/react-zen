import { Inter, JetBrains_Mono } from 'next/font/google';
import { Head } from 'nextra/components';
import { getPageMap } from 'nextra/page-map';
import { Footer, Layout, Navbar } from 'nextra-theme-docs';
import type { ReactNode } from 'react';
import { ZenProvider } from '@/components';
import 'nextra-theme-docs/style.css';
import './globals.css';
import type { Metadata } from 'next';
import Script from 'next/script';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const jetbrainsMono = JetBrains_Mono({ subsets: ['latin'], variable: '--font-jetbrains-mono' });

export const metadata: Metadata = {
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
      <Head>
        {process.env.NODE_ENV === 'production' && (
          <Script
            defer
            data-website-id="b2cbcc3e-7a67-4232-9619-4e2b4d3b87e4"
            data-domains="zen.umami.is"
            src="/z.js"
          />
        )}
      </Head>
      <body className={`${inter.className} ${inter.variable} ${jetbrainsMono.variable}`}>
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
