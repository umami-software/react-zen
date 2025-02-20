import { Row, RowProps } from '../Row';

export function FormButtons({ children, ...props }: RowProps) {
  return (
    <Row paddingTop="3" gap="3" justifyContent="flex-end" {...props}>
      {children}
    </Row>
  );
}
