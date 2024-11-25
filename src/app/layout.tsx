import { ReactNode } from 'react';
import Script from 'next/script';
import type { Metadata } from 'next';
import { inter } from '@/styles/fonts';
import { App } from './App';
import '@/styles/zen.css';
import '@/styles/reset.css';
import '@/styles/global.css';

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <title>zen</title>
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        {process.env.NODE_ENV === 'production' && (
          <Script
            defer
            data-website-id="b12b8a02-b6eb-413d-b9aa-af43b442487f"
            data-domains="zen.umami.is"
            src="/a/script.js"
          />
        )}
      </head>
      <body className={inter.className}>
        <App>{children}</App>
      </body>
    </html>
  );
}

export const metadata: Metadata = {
  title: 'Umami Zen',
  description: 'React components built by Umami.',
};
