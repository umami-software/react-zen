'use client';
import Link from 'next/link';
import { Button, Row } from '@/components';
import { useTheme } from '@/components/hooks/useTheme';

export function Header() {
  const { setTheme } = useTheme();

  return (
    <Row alignItems="center" justifyContent="space-between" paddingY="2">
      <Row gap="4">
        <Link href={'/'}>
          <b>zen</b>
        </Link>
        <Link href={'/docs'}>docs</Link>
      </Row>
      <Row gap="3">
        <Button size="xs" onPress={() => setTheme('light')}>
          light
        </Button>
        <Button size="xs" onPress={() => setTheme('dark')}>
          dark
        </Button>
      </Row>
    </Row>
  );
}
