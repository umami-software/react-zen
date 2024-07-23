import { Text, Column, Button } from '@/components';

export default function RootPage() {
  return (
    <Column justifyContent="center" alignItems="center" spacing={6} grow={1}>
      <Text size="xl" weight="bold">
        zen.
      </Text>
      <Button asChild>
        <a href="/docs">Read docs</a>
      </Button>
    </Column>
  );
}
