import { ReactNode } from 'react';
import type { Metadata } from 'next';
import { App } from './App';
import '@/styles/zen.css';
import '@/styles/base.css';

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
      </head>
      <body>
        <App>{children}</App>
      </body>
    </html>
  );
}

export const metadata: Metadata = {
  title: 'Umami Zen',
  description: 'React components built by Umami.',
};
