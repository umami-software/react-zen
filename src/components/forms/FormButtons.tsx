import { Row, RowProps } from '../Row';

export interface FormButtonsProps extends RowProps {
  fill?: boolean;
}

export function FormButtons({ fill, children, ...props }: FormButtonsProps) {
  return (
    <Row paddingTop="3" gap="3" justifyContent="flex-end" {...props}>
      {children}
    </Row>
  );
}
