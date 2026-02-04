'use client';

import { ChevronDown, X } from 'lucide-react';
import { useState } from 'react';
import { Box, Button, Checkbox, Column, Icon, Row, Text } from '@/components';

interface FilterOption {
  id: string;
  label: string;
  count?: number;
}

interface FilterGroup {
  id: string;
  label: string;
  options: FilterOption[];
}

interface FilterPanelProps {
  groups: FilterGroup[];
  selectedFilters: Record<string, string[]>;
  onFilterChange: (groupId: string, optionId: string, selected: boolean) => void;
  onClearAll?: () => void;
}

export function FilterPanel({
  groups,
  selectedFilters,
  onFilterChange,
  onClearAll,
}: FilterPanelProps) {
  const totalSelected = Object.values(selectedFilters).flat().length;

  return (
    <Column gap="4">
      <Row alignItems="center" justifyContent="space-between">
        <Text weight="semibold">Filters</Text>
        {totalSelected > 0 && (
          <Button variant="quiet" size="sm" onPress={onClearAll}>
            Clear all ({totalSelected})
          </Button>
        )}
      </Row>

      {groups.map(group => (
        <FilterGroupComponent
          key={group.id}
          group={group}
          selected={selectedFilters[group.id] || []}
          onFilterChange={(optionId, checked) => onFilterChange(group.id, optionId, checked)}
        />
      ))}
    </Column>
  );
}

interface FilterGroupComponentProps {
  group: FilterGroup;
  selected: string[];
  onFilterChange: (optionId: string, selected: boolean) => void;
}

function FilterGroupComponent({ group, selected, onFilterChange }: FilterGroupComponentProps) {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <Column>
      <Row
        alignItems="center"
        justifyContent="space-between"
        paddingY="2"
        className="cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <Text weight="medium">
          {group.label}
          {selected.length > 0 && (
            <Text as="span" color="muted">
              {' '}
              ({selected.length})
            </Text>
          )}
        </Text>
        <Icon size="sm" color="muted" rotate={isOpen ? 180 : 0}>
          <ChevronDown />
        </Icon>
      </Row>

      {isOpen && (
        <Column gap="2" paddingLeft="1">
          {group.options.map(option => (
            <Row key={option.id} alignItems="center" justifyContent="space-between">
              <Checkbox
                isSelected={selected.includes(option.id)}
                onChange={checked => onFilterChange(option.id, checked)}
              >
                <Text>{option.label}</Text>
              </Checkbox>
              {option.count !== undefined && <Text color="muted">{option.count}</Text>}
            </Row>
          ))}
        </Column>
      )}
    </Column>
  );
}

interface ActiveFiltersProps {
  groups: FilterGroup[];
  selectedFilters: Record<string, string[]>;
  onRemove: (groupId: string, optionId: string) => void;
}

export function ActiveFilters({ groups, selectedFilters, onRemove }: ActiveFiltersProps) {
  const activeFilters = Object.entries(selectedFilters).flatMap(([groupId, optionIds]) =>
    optionIds.map(optionId => {
      const group = groups.find(g => g.id === groupId);
      const option = group?.options.find(o => o.id === optionId);
      return { groupId, optionId, label: option?.label || optionId };
    }),
  );

  if (activeFilters.length === 0) return null;

  return (
    <Row gap="2" flexWrap="wrap">
      {activeFilters.map(({ groupId, optionId, label }) => (
        <Row
          key={`${groupId}-${optionId}`}
          alignItems="center"
          gap="1"
          paddingX="2"
          paddingY="1"
          backgroundColor="interactive"
          borderRadius="full"
        >
          <Text>{label}</Text>
          <Box className="cursor-pointer" onClick={() => onRemove(groupId, optionId)}>
            <Icon size="xs">
              <X />
            </Icon>
          </Box>
        </Row>
      ))}
    </Row>
  );
}
