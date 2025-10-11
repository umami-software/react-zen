import { Row } from '@/components/Row';
import { Grid, GridProps } from '@/components/Grid';
import { Text } from '@/components/Text';
import { mapIdProperty } from '@/lib/utils';

export interface DataCardProps extends GridProps {
  data?: { id: string; label: string; value: string }[];
}

export function DataCard({ data = [], ...props }: DataCardProps) {
  const rows = mapIdProperty(data);

  return (
    <Grid width="100%" {...props}>
      {rows.map(row => {
        return (
          <Grid columns="180px 1fr" key={row?.id} border="bottom" gapX="3">
            <Row paddingY="3">
              <Text size="3" weight="bold">
                {row?.label}
              </Text>
            </Row>
            <Row paddingY="3">
              <Text size="3">{row?.value}</Text>
            </Row>
          </Grid>
        );
      })}
    </Grid>
  );
}
