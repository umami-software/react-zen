import { Select } from '@/components';
import { useState } from 'react';

const values = ['One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine', 'Ten'];

export function SelectSearchExample({ isLoading }: { isLoading?: boolean }) {
  const [items, setItems] = useState<string[]>(values);

  const handleSearch = (search: string) => {
    setItems(
      search ? values.filter(item => item.toLowerCase().includes(search.toLowerCase())) : values,
    );
  };

  return (
    <Select
      items={items}
      label="Select"
      placeholder="Please select an option"
      allowSearch
      onSearch={handleSearch}
      isLoading={isLoading}
    />
  );
}
