import { useState } from 'react';
import { InlineEditField, Text } from '@/components';

export function InlineEditExample() {
  const [value, setValue] = useState('Click me to edit.');

  return (
    <InlineEditField value={value} onCommit={value => setValue(value)}>
      <Text>{value}</Text>
    </InlineEditField>
  );
}
