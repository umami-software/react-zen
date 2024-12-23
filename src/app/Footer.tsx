import { Row } from '@/components/Row';

export function Footer() {
  return (
    <Row as="footer" justifyContent="center" alignItems="center" height="80px">
      <a href="https://umami.is" target="_blank">
        Built by <strong>umami</strong>
      </a>
    </Row>
  );
}
