import { useState } from 'react';
import { Select } from '@/components';

const values = ['One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine', 'Ten'];

export function SelectSearchExample({ isLoading }: { isLoading?: boolean }) {
  const [items, setItems] = useState<string[]>(values);
  const [search, setSearch] = useState<string>('');

  const handleSearch = (search: string) => {
    setSearch(search);
    setItems(
      search ? values.filter(item => item.toLowerCase().includes(search.toLowerCase())) : values,
    );
  };

  const handleOpen = (isOpen: boolean) => {
    if (!isOpen) {
      setSearch('');
      setItems(values);
    }
  };

  return (
    <Select
      items={items}
      label="Select"
      placeholder="Please select an option"
      allowSearch
      searchValue={search}
      onSearch={handleSearch}
      onOpenChange={handleOpen}
      isLoading={isLoading}
    />
  );
}
