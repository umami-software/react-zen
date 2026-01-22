'use client';

import { useState } from 'react';
import { Box } from '@/components';
import { FilterPanel } from './FilterPanel';

const filterGroups = [
  {
    id: 'category',
    label: 'Category',
    options: [
      { id: 'electronics', label: 'Electronics', count: 42 },
      { id: 'clothing', label: 'Clothing', count: 28 },
      { id: 'books', label: 'Books', count: 15 },
    ],
  },
  {
    id: 'price',
    label: 'Price Range',
    options: [
      { id: 'under-50', label: 'Under $50', count: 23 },
      { id: '50-100', label: '$50 - $100', count: 31 },
      { id: 'over-100', label: 'Over $100', count: 19 },
    ],
  },
];

export function FilterPanelExample() {
  const [selectedFilters, setSelectedFilters] = useState<Record<string, string[]>>({
    category: ['electronics'],
    price: [],
  });

  const handleFilterChange = (groupId: string, optionId: string, selected: boolean) => {
    setSelectedFilters(prev => ({
      ...prev,
      [groupId]: selected
        ? [...(prev[groupId] || []), optionId]
        : (prev[groupId] || []).filter(id => id !== optionId),
    }));
  };

  return (
    <Box width="64">
      <FilterPanel
        groups={filterGroups}
        selectedFilters={selectedFilters}
        onFilterChange={handleFilterChange}
        onClearAll={() => setSelectedFilters({ category: [], price: [] })}
      />
    </Box>
  );
}
