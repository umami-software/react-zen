import { Box, Column, Text } from '@/components';
import { ACCENT_COLORS } from '@/lib/constants';

export function AccentColorsExample() {
  return ACCENT_COLORS.map(color => (
    <Column key={color} gap="2">
      <Box backgroundColor={color} width="50px" height="50px" rounded="md" />
      <Text>{color}</Text>
    </Column>
  ));
}
