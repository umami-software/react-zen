'use client';

import { Search } from 'lucide-react';
import type { ReactNode } from 'react';
import { useState } from 'react';
import { Box, Column, Icon, Row, Text, TextField } from '@/components';

interface CommandItem {
  id: string;
  label: string;
  description?: string;
  icon?: ReactNode;
  shortcut?: string;
  onSelect?: () => void;
}

interface CommandGroup {
  label: string;
  items: CommandItem[];
}

interface CommandPaletteInlineProps {
  groups: CommandGroup[];
  placeholder?: string;
}

export function CommandPaletteInline({
  groups,
  placeholder = 'Search commands...',
}: CommandPaletteInlineProps) {
  const [search, setSearch] = useState('');
  const [selectedIndex] = useState(0);

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

  let itemIndex = -1;

  return (
    <Box
      width="100%"
      style={{ maxWidth: '32rem' }}
      backgroundColor="surface-raised"
      borderRadius="lg"
      border
      borderColor="muted"
      overflow="hidden"
    >
      <Row padding="3" gap="3" alignItems="center" borderColor="muted" border="bottom">
        <Icon color="muted">
          <Search />
        </Icon>
        <TextField
          value={search}
          onChange={setSearch}
          placeholder={placeholder}
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
                <Text color="muted" weight="semibold">
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
                    onClick={() => item.onSelect?.()}
                  >
                    {item.icon && (
                      <Icon size="sm" color="muted">
                        {item.icon}
                      </Icon>
                    )}
                    <Column flexGrow="1" gap="0">
                      <Text>{item.label}</Text>
                      {item.description && <Text color="muted">{item.description}</Text>}
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
                            <Text color="muted">{key}</Text>
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
  );
}
