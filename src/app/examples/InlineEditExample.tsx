import { InlineEditField, Text } from '@/components';
import { useState } from 'react';

export function InlineEditExample() {
  const [value, setValue] = useState('Click me to edit.');

  return (
    <InlineEditField value={value} onCommit={value => setValue(value)}>
      <Text>{value}</Text>
    </InlineEditField>
  );
}
