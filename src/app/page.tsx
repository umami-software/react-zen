import { Text, Column, Button } from '@/components';

export default function RootPage() {
  return (
    <Column justifyContent="center" alignItems="center" gap="8" height="100%">
      <Text weight="bold">zen.</Text>
      <Text type="muted">A modern, minimalist React component library.</Text>
      <Button asChild>
        <a href="/docs">Read docs</a>
      </Button>
    </Column>
  );
}
