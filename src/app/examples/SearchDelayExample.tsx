import { SearchField, Column, Text, Row } from '@/components';
import { useState } from 'react';

export function SearchDelayExample() {
  const [value, setValue] = useState('');

  return (
    <Column spacing={3}>
      <Row spacing={3}>
        <Text weight="bold">Search value:</Text>
        <Text>{value}</Text>
      </Row>
      <SearchField delay={1000} onSearch={setValue} />
    </Column>
  );
}
