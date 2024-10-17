import { useState } from 'react';
import { SearchField, Column, TextField } from '@/components';

export function SearchDelayExample() {
  const [value, setValue] = useState('abc');

  return (
    <Column gap="lg">
      <SearchField delay={1000} onSearch={setValue} />
      <TextField
        name="search"
        label="Search value"
        value={value}
        defaultValue={value}
        isReadOnly={true}
      />
    </Column>
  );
}
