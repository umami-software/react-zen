import { ReactNode } from 'react';
import { Nav } from './Nav';
import styles from './layout.module.css';

export default function DocsLayout({ children }: { children: ReactNode }) {
  return (
    <main className={styles.container}>
      <Nav />
      <div className="docs">{children}</div>
    </main>
  );
}
