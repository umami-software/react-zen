import { Box, Column, Text } from '@/components';

export const accentColors = [
  'gray',
  'gold',
  'bronze',
  'brown',
  'yellow',
  'amber',
  'orange',
  'tomato',
  'red',
  'ruby',
  'crimson',
  'pink',
  'plum',
  'purple',
  'violet',
  'iris',
  'indigo',
  'blue',
  'cyan',
  'teal',
  'jade',
  'green',
  'grass',
  'lime',
  'mint',
  'sky',
] as const;

export function AccentColorsExample() {
  return accentColors.map((color, index) => (
    <Column key={index} gap="2">
      <Box backgroundColor={color} width="50px" height="50px" borderRadius="2" />
      <Text>{color}</Text>
    </Column>
  ));
}
