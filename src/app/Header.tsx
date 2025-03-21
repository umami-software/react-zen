import Link from 'next/link';
import { Row, Text, ThemeButton, Button, Icon } from '@/components';
import Github from '@/assets/github.svg';

export function Header() {
  return (
    <Row justifyContent="space-between" alignItems="center">
      <Row paddingY="5" gap="5" alignItems="center">
        <Text size="5" weight="bold" spacing="1" asChild>
          <Link href="/">zen</Link>
        </Text>
        <Link href="/docs">docs</Link>
      </Row>
      <Row gap="2" alignItems="center">
        <ThemeButton />
        <Button variant="quiet" asChild>
          <Link href="https://github.com/umami-software/react-zen" target="_blank">
            <Icon>
              <Github />
            </Icon>
          </Link>
        </Button>
      </Row>
    </Row>
  );
}
