'use client';
import { useState } from 'react';
import { Column, Pagination, Text } from '@/components';

export function PaginationExample() {
  const [page, setPage] = useState(1);

  return (
    <Column gap="3" alignItems="center">
      <Pagination pageCount={10} page={page} onChange={setPage} />
      <Text color="muted">Current page: {page}</Text>
    </Column>
  );
}
