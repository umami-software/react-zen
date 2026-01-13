import { Box, Column, Text } from '@/components';
import { ACCENT_COLORS } from '@/lib/constants';

export function AccentColorsExample() {
  return ACCENT_COLORS.map((color, index) => (
    <Column key={index} gap="2">
      <Box backgroundColor={color} width="50px" height="50px" borderRadius="2" />
      <Text>{color}</Text>
    </Column>
  ));
}
