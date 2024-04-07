import { ReactNode } from 'react';
import type { Metadata } from 'next';
import App from './App';
import '../styles/zen.css';
import './global.css';

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
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
