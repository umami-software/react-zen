'use client';
import Link from 'next/link';
import { Button, Row } from '@/components';
import { useTheme } from '@/components/hooks/useTheme';
import styles from './Header.module.css';

export function Header() {
  const { setTheme } = useTheme();

  return (
    <Row alignItems="center" justifyContent="space-between" paddingX={4} paddingY={2}>
      <div>
        <Link href={'/'}>
          <b>zen</b>
        </Link>{' '}
        - <Link href={'/docs'}>docs</Link>
      </div>
      <div className={styles.buttons}>
        <Button size="xs" onPress={() => setTheme('light')}>
          light
        </Button>
        <Button size="xs" onPress={() => setTheme('dark')}>
          dark
        </Button>
      </div>
    </Row>
  );
}
