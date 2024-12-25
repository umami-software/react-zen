import { Text, Row, Column, Button, Heading } from '@/components';

export default function RootPage() {
  return (
    <Column justifyContent="center" alignItems="center" gap="8" height="100%">
      <Heading size="6">zen.</Heading>
      <Text color="muted">A modern, minimalist React component library.</Text>
      <Row gap="3">
        <Button variant="primary" asChild>
          <a href="/docs">Get started</a>
        </Button>
        <Button asChild>
          <a href="https://github.com/umami-software/react-zen">View source</a>
        </Button>
      </Row>
    </Column>
  );
}
