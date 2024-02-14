import { ReactNode } from 'react';
import type { Metadata } from 'next';
import App from './App';
import './app.css';

export const metadata: Metadata = {
  title: 'Umami Zen',
  description: 'React components built by Umami.',
};

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
