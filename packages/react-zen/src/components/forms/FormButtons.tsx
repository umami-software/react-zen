import type { ReactNode } from 'react';
import { Row, type RowProps } from '../Row';

export interface FormButtonsProps extends RowProps {
  children?: ReactNode;
  fill?: boolean;
}

export function FormButtons({ fill, children, ...props }: FormButtonsProps) {
  return (
    <Row paddingTop="3" gap="3" justifyContent="flex-end" {...props}>
      {children}
    </Row>
  );
}
