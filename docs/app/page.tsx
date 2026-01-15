import Link from 'next/link';
import { Button, Column, Heading, Row, Text } from '@/components';

export default function RootPage() {
  return (
    <Column justifyContent="center" alignItems="center" gap="8" height="100%">
      <Heading size="5xl">zen.</Heading>
      <Text color="muted">A modern, minimalist React component library.</Text>
      <Row gap="3">
        <Button variant="primary" render={<Link href="/docs" />}>
          Get started
        </Button>
        <Button render={<Link href="https://github.com/umami-software/react-zen" />}>
          View source
        </Button>
      </Row>
    </Column>
  );
}
