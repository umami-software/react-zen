'use client';

import { useState } from 'react';
import { Button } from '@/components';
import { DeleteConfirmation } from './ConfirmationDialogPattern';

export function ConfirmationDialogExample() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Button variant="danger" onPress={() => setIsOpen(true)}>
        Delete Item
      </Button>
      <DeleteConfirmation
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        onConfirm={() => console.log('Deleted!')}
        itemName="this document"
      />
    </>
  );
}
