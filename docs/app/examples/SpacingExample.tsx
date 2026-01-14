import { ExampleBox } from '@/app/examples/ExampleBox';
import { Column, Label, Row } from '@/components';

const SPACING_VALUES = ['1', '2', '3', '4', '5', '6', '8', '10', '12', '16', '20', '24'] as const;

export function SpacingExample() {
  return (
    <Column alignItems="flex-start" gap="6">
      {SPACING_VALUES.map(spacing => {
        return (
          <Column key={spacing} gap="2">
            <Label>Spacing {spacing}</Label>
            <Row gap={spacing}>
              <ExampleBox />
              <ExampleBox />
            </Row>
          </Column>
        );
      })}
    </Column>
  );
}
