import { Box, Text } from '@/components';

export function Footer() {
  return (
    <Box as="footer" paddingY="8">
      <Text align="center" as="div">
        Built by{' '}
        <a href="https://umami.is?ref=zen">
          <strong>umami</strong>
        </a>
      </Text>
    </Box>
  );
}
