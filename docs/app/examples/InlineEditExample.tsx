import { useState } from 'react';
import { InlineEditField, Text } from '@/components';

export function InlineEditExample() {
  const defaultValue = 'Click me to edit.';
  const [value, setValue] = useState(defaultValue);

  return (
    <InlineEditField
      name="text"
      value={value}
      onCommit={value => setValue(value)}
      placeholder="Enter text..."
    >
      <Text>{value || 'Empty'}</Text>
    </InlineEditField>
  );
}
