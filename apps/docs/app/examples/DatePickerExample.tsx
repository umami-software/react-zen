'use client';

import { useState } from 'react';
import { Column, DatePicker, TextField } from '@/components';

export function DatePickerExample() {
  const [date, setDate] = useState<Date | undefined>(undefined);

  return (
    <Column width="300px" gap>
      <DatePicker label="Date" value={date} onChange={setDate} />
      <TextField value={date ? date.toDateString() : 'No date selected'} isReadOnly />
    </Column>
  );
}
