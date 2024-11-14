import { Text, Column, Button } from '@/components';

export default function RootPage() {
  return (
    <Column justifyContent="center" alignItems="center" gap="4" grow={1}>
      <Text size="xl" weight="bold">
        zen.
      </Text>
      <Text type="muted">A modern, minimalist UI component library.</Text>
      <Button asChild>
        <a href="/docs">Read docs</a>
      </Button>
    </Column>
  );
}
