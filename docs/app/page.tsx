import Link from 'next/link';
import { Text, Row, Column, Button, Heading } from '@/components';

export default function RootPage() {
  return (
    <Column justifyContent="center" alignItems="center" gap="8" height="100%">
      <Heading size="6">zen.</Heading>
      <Text color="muted">A modern, minimalist React component library.</Text>
      <Row gap="3">
        <Button variant="primary" asChild>
          <Link href="/docs">Get started</Link>
        </Button>
        <Button asChild>
          <Link href="https://github.com/umami-software/react-zen">View source</Link>
        </Button>
      </Row>
    </Column>
  );
}
