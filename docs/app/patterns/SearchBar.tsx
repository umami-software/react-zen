'use client';

import { Search, X } from 'lucide-react';
import { type ReactNode, useState } from 'react';
import { Box, Column, Icon, Row, Text, TextField } from '@/components';

interface SearchSuggestion {
  id: string;
  label: string;
  description?: string;
  icon?: ReactNode;
}

interface SearchBarProps {
  placeholder?: string;
  suggestions?: SearchSuggestion[];
  onSearch?: (query: string) => void;
  onSelect?: (suggestion: SearchSuggestion) => void;
  showSuggestions?: boolean;
}

export function SearchBar({
  placeholder = 'Search...',
  suggestions = [],
  onSearch,
  onSelect,
  showSuggestions = true,
}: SearchBarProps) {
  const [query, setQuery] = useState('');
  const [isFocused, setIsFocused] = useState(false);

  const filteredSuggestions = suggestions.filter(
    s =>
      query &&
      (s.label.toLowerCase().includes(query.toLowerCase()) ||
        s.description?.toLowerCase().includes(query.toLowerCase())),
  );

  const handleClear = () => {
    setQuery('');
    onSearch?.('');
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      onSearch?.(query);
    }
  };

  return (
    <Box position="relative">
      <Row
        alignItems="center"
        gap="2"
        paddingX="3"
        paddingY="2"
        backgroundColor="surface-raised"
        borderRadius="md"
        border
        borderColor="muted"
      >
        <Icon size="sm" color="muted">
          <Search />
        </Icon>
        <TextField
          value={query}
          onChange={setQuery}
          placeholder={placeholder}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setTimeout(() => setIsFocused(false), 200)}
          onKeyDown={handleKeyDown}
          style={{ border: 'none', background: 'transparent', outline: 'none', flex: 1 }}
        />
        {query && (
          <Box className="cursor-pointer" onClick={handleClear}>
            <Icon size="sm" color="muted">
              <X />
            </Icon>
          </Box>
        )}
      </Row>

      {showSuggestions && isFocused && filteredSuggestions.length > 0 && (
        <Box
          position="absolute"
          style={{ top: '100%', left: 0, right: 0, zIndex: 10 }}
          marginTop="1"
          backgroundColor="surface-raised"
          borderRadius="md"
          border
          borderColor="muted"
          overflow="hidden"
          className="shadow-lg"
        >
          {filteredSuggestions.map(suggestion => (
            <Row
              key={suggestion.id}
              padding="3"
              gap="3"
              alignItems="center"
              className="cursor-pointer hover:bg-interactive"
              onClick={() => {
                setQuery(suggestion.label);
                onSelect?.(suggestion);
              }}
            >
              {suggestion.icon && (
                <Icon size="sm" color="muted">
                  {suggestion.icon}
                </Icon>
              )}
              <Column gap="0">
                <Text size="sm">{suggestion.label}</Text>
                {suggestion.description && (
                  <Text size="xs" color="muted">
                    {suggestion.description}
                  </Text>
                )}
              </Column>
            </Row>
          ))}
        </Box>
      )}
    </Box>
  );
}
