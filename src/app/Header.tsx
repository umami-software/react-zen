'use client';
import Link from 'next/link';
import { Button, Row, Icon, Text } from '@/components';
import ThemeButton from '@/components/ThemeButton';
import GitHub from '@/assets/github.svg';

export function Header() {
  return (
    <Row alignItems="center" justifyContent="space-between" paddingY="2">
      <Row gap="5">
        <Link href={'/'}>
          <Text weight="bold" size="4">
            zen
          </Text>
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
