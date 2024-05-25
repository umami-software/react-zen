import { ReactNode } from 'react';
import Menu from './Menu';
import styles from './layout.module.css';

export default function DocsLayout({ children }: { children: ReactNode }) {
  return (
    <main className={styles.container}>
      <Menu />
      <div>{children}</div>
    </main>
  );
}
