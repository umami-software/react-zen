import { Text, Row, Column, Button } from '@/components';

export default function RootPage() {
  return (
    <Column justifyContent="center" alignItems="center" gap="8" height="100%">
      <Text weight="bold">zen.</Text>
      <Text type="muted">A modern, minimalist React component library.</Text>
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
