import { ReactNode } from 'react';
import { Grid, Box } from '@/components';
import { Nav } from './Nav';
import styles from './layout.module.css';

export default function DocsLayout({ children }: { children: ReactNode }) {
  return (
    <Grid
      columns="minmax(max-content, 200px) 1fr"
      width="100%"
      maxWidth="960px"
      style={{ margin: '0 auto' }}
    >
      <Nav />
      <Box className={styles.docs}>{children}</Box>
    </Grid>
  );
}
