import Link from 'next/link';
import { Button, Icon, Row, Text, ThemeButton } from '@/components';
import { Github } from '@/components/svg';

export function Header() {
  return (
    <Row justifyContent="space-between" alignItems="center">
      <Row paddingY="5" gap="5" alignItems="center">
        <Text size="lg" weight="bold" spacing="tighter" render={<Link href="/" />}>
          zen
        </Text>
        <Link href="/docs">docs</Link>
      </Row>
      <Row gap="2" alignItems="center">
        <ThemeButton />
        <Button
          variant="quiet"
          render={<Link href="https://github.com/umami-software/react-zen" target="_blank" />}
        >
          <Icon>
            <Github />
          </Icon>
        </Button>
      </Row>
    </Row>
  );
}
