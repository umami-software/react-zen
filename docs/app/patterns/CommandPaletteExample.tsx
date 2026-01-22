'use client';

import { FileText, Home, Search, Settings, Users } from 'lucide-react';
import { Button, Row, Text } from '@/components';
import { CommandPalette, useCommandPalette } from './CommandPalette';

export function CommandPaletteExample() {
  const { isOpen, open, close } = useCommandPalette();

  const groups = [
    {
      label: 'Navigation',
      items: [
        { id: 'home', label: 'Go to Home', icon: <Home />, shortcut: 'G+H', onSelect: () => {} },
        {
          id: 'settings',
          label: 'Go to Settings',
          icon: <Settings />,
          shortcut: 'G+S',
          onSelect: () => {},
        },
        { id: 'users', label: 'Go to Users', icon: <Users />, onSelect: () => {} },
      ],
    },
    {
      label: 'Actions',
      items: [
        {
          id: 'new',
          label: 'Create New Document',
          icon: <FileText />,
          shortcut: '⌘+N',
          onSelect: () => {},
        },
        {
          id: 'search',
          label: 'Search Everything',
          icon: <Search />,
          shortcut: '⌘+K',
          onSelect: () => {},
        },
      ],
    },
  ];

  return (
    <>
      <Row gap="2" alignItems="center">
        <Button onPress={open}>Open Command Palette</Button>
        <Text size="sm" color="muted">
          or press ⌘K
        </Text>
      </Row>
      <CommandPalette groups={groups} isOpen={isOpen} onClose={close} />
    </>
  );
}
