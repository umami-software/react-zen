'use client';
import Link from 'next/link';
import { Button, Row } from '@/components';
import { useTheme } from '@/components/hooks/useTheme';
import ThemeButton from '@/components/ThemeButton';

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
        <ThemeButton />
      </Row>
    </Row>
  );
}
