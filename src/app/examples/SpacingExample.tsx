import { Box, Row, Column, Label } from '@/components';
import { ExampleBox } from '@/app/examples/ExampleBox';

export function SpacingExample() {
  return (
    <Column alignItems="flex-start" gap="6">
      {Array(12)
        .fill(0)
        .map((_, index) => {
          return (
            <Column key={index} gap="2">
              <Label>Spacing {index + 1}</Label>
              <Row gap={(index + 1).toString() as any}>
                <ExampleBox borderSize="1" />
                <ExampleBox borderSize="1" />
              </Row>
            </Column>
          );
        })}
    </Column>
  );
}
