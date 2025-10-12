import { ReactNode, Fragment } from 'react';
import { Row } from '@/components/Row';
import { Grid, GridProps } from '@/components/Grid';
import { Text } from '@/components/Text';
import { mapIdProperty } from '@/lib/utils';

export interface DataCardProps extends GridProps {
  data?: { label: ReactNode; value: any }[];
  labelWidth?: string;
}

export function DataCard({ data = [], labelWidth = 'auto', ...props }: DataCardProps) {
  const rows = mapIdProperty(data);

  return (
    <Grid width="100%" columns={`${labelWidth} 1fr`} border borderRadius="3" padding="6" {...props}>
      {rows.map((row, index) => {
        return (
          <Fragment key={index}>
            <Row paddingY="3" border="bottom" borderColor="4" paddingRight="6">
              <Text size="3" weight="bold">
                {row?.label}
              </Text>
            </Row>
            <Row paddingY="3" border="bottom" borderColor="4">
              <Text size="3">{row?.value}</Text>
            </Row>
          </Fragment>
        );
      })}
    </Grid>
  );
}
