'use client';

import { Box, Column, PaletteSwitcher, Row, Text } from '@/components';

const SHADES = [
  '50',
  '100',
  '200',
  '300',
  '400',
  '500',
  '600',
  '700',
  '800',
  '900',
  '950',
] as const;

export function PaletteSwatchesExample() {
  return (
    <Column gap="4">
      <Row gap="2" alignItems="center">
        <Text weight="medium" minWidth="20">
          Select palette:
        </Text>
        <PaletteSwitcher />
      </Row>
      <Row gap="2" wrap="wrap">
        {SHADES.map(shade => (
          <Column key={shade} gap="1" alignItems="center">
            <Box
              width="12"
              height="12"
              borderRadius="md"
              border
              style={{ backgroundColor: `var(--gray-${shade})` }}
            />
            <Text size="xs" color="muted">
              {shade}
            </Text>
          </Column>
        ))}
      </Row>
    </Column>
  );
}
