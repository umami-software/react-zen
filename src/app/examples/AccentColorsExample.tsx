import { accentColors } from '@/lib/constants';
import { Box, Column, Text } from '@/components';

export function AccentColorsExample() {
  return accentColors.map(color => (
    <Column key={color} gap="2">
      <Box backgroundColor={color} width="50px" height="50px" borderRadius="2" />
      <Text>{color}</Text>
    </Column>
  ));
}
