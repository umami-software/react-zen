'use client';

import { Search } from 'lucide-react';
import { type ReactNode, useEffect, useState } from 'react';
import { Box, Column, Icon, Row, Text, TextField } from '@/components';

interface CommandItem {
  id: string;
  label: string;
  description?: string;
  icon?: ReactNode;
  shortcut?: string;
  onSelect: () => void;
}

interface CommandGroup {
  label: string;
  items: CommandItem[];
}

interface CommandPaletteProps {
  groups: CommandGroup[];
  isOpen: boolean;
  onClose: () => void;
  placeholder?: string;
}

export function CommandPalette({
  groups,
  isOpen,
  onClose,
  placeholder = 'Search commands...',
}: CommandPaletteProps) {
  const [search, setSearch] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(0);

  const filteredGroups = groups
    .map(group => ({
      ...group,
      items: group.items.filter(
        item =>
          item.label.toLowerCase().includes(search.toLowerCase()) ||
          item.description?.toLowerCase().includes(search.toLowerCase()),
      ),
    }))
    .filter(group => group.items.length > 0);

  const allItems = filteredGroups.flatMap(group => group.items);

  useEffect(() => {
    if (!isOpen) {
      setSearch('');
      setSelectedIndex(0);
    }
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;

      if (e.key === 'Escape') {
        onClose();
      } else if (e.key === 'ArrowDown') {
        e.preventDefault();
        setSelectedIndex(i => (i + 1) % allItems.length);
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        setSelectedIndex(i => (i - 1 + allItems.length) % allItems.length);
      } else if (e.key === 'Enter' && allItems[selectedIndex]) {
        allItems[selectedIndex].onSelect();
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose, allItems, selectedIndex]);

  if (!isOpen) return null;

  let itemIndex = -1;

  return (
    <Box
      position="fixed"
      style={{ inset: 0, zIndex: 50 }}
      display="flex"
      alignItems="flex-start"
      justifyContent="center"
      paddingTop="20"
    >
      <Box position="absolute" style={{ inset: 0 }} backgroundColor="overlay" onClick={onClose} />
      <Box
        position="relative"
        width="100%"
        style={{ maxWidth: '32rem' }}
        backgroundColor="surface-raised"
        borderRadius="lg"
        border
        borderColor="muted"
        overflow="hidden"
        className="shadow-xl"
      >
        <Row padding="3" gap="3" alignItems="center" borderColor="muted" border="bottom">
          <Icon color="muted">
            <Search />
          </Icon>
          <TextField
            value={search}
            onChange={setSearch}
            placeholder={placeholder}
            autoFocus
            style={{ border: 'none', background: 'transparent', outline: 'none', flex: 1 }}
          />
        </Row>
        <Column style={{ maxHeight: '20rem' }} overflow="auto">
          {filteredGroups.length === 0 ? (
            <Box padding="4">
              <Text color="muted" align="center">
                No results found
              </Text>
            </Box>
          ) : (
            filteredGroups.map(group => (
              <Column key={group.label}>
                <Box paddingX="3" paddingY="2">
                  <Text size="xs" color="muted" weight="semibold">
                    {group.label}
                  </Text>
                </Box>
                {group.items.map(item => {
                  itemIndex++;
                  const isSelected = itemIndex === selectedIndex;

                  return (
                    <Row
                      key={item.id}
                      paddingX="3"
                      paddingY="2"
                      gap="3"
                      alignItems="center"
                      backgroundColor={isSelected ? 'interactive' : undefined}
                      className="cursor-pointer"
                      onClick={() => {
                        item.onSelect();
                        onClose();
                      }}
                    >
                      {item.icon && (
                        <Icon size="sm" color="muted">
                          {item.icon}
                        </Icon>
                      )}
                      <Column flexGrow="1" gap="0">
                        <Text size="sm">{item.label}</Text>
                        {item.description && (
                          <Text size="xs" color="muted">
                            {item.description}
                          </Text>
                        )}
                      </Column>
                      {item.shortcut && (
                        <Row gap="1">
                          {item.shortcut.split('+').map(key => (
                            <Box
                              key={key}
                              paddingX="2"
                              paddingY="1"
                              backgroundColor="surface-base"
                              borderRadius="sm"
                              border
                              borderColor="muted"
                            >
                              <Text size="xs" color="muted">
                                {key}
                              </Text>
                            </Box>
                          ))}
                        </Row>
                      )}
                    </Row>
                  );
                })}
              </Column>
            ))
          )}
        </Column>
      </Box>
    </Box>
  );
}

export function useCommandPalette() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setIsOpen(open => !open);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return {
    isOpen,
    open: () => setIsOpen(true),
    close: () => setIsOpen(false),
    toggle: () => setIsOpen(open => !open),
  };
}
