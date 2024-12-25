'use client';
import Link from 'next/link';
import { Button, Row, Icon } from '@/components';
import { useTheme } from '@/components/hooks/useTheme';
import ThemeButton from '@/components/ThemeButton';
import GitHub from '@/assets/github.svg';

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
      <Row gap="2" alignItems="center">
        <ThemeButton />
        <Button variant="quiet" asChild>
          <Link
            href="https://github.com/umami-software/react-zen"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Icon>
              <GitHub />
            </Icon>
          </Link>
        </Button>
      </Row>
    </Row>
  );
}
