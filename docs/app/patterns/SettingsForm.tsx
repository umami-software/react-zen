'use client';

import type { ReactNode } from 'react';
import { Box, type BoxProps, Column, Row, Switch, Text, TextField } from '@/components';

interface SettingsFormProps extends BoxProps {
  children: ReactNode;
}

export function SettingsForm({ children, ...props }: SettingsFormProps) {
  return (
    <Column gap="6" {...props}>
      {children}
    </Column>
  );
}

interface SettingsSectionProps {
  title: string;
  description?: string;
  children: ReactNode;
}

export function SettingsSection({ title, description, children }: SettingsSectionProps) {
  return (
    <Column gap="4">
      <Column gap="1">
        <Text weight="semibold">{title}</Text>
        {description && (
          <Text size="sm" color="muted">
            {description}
          </Text>
        )}
      </Column>
      <Column gap="4" paddingLeft="0">
        {children}
      </Column>
    </Column>
  );
}

interface SettingsRowProps {
  label: string;
  description?: string;
  children: ReactNode;
}

export function SettingsRow({ label, description, children }: SettingsRowProps) {
  return (
    <Row
      alignItems="center"
      justifyContent="space-between"
      paddingY="3"
      borderColor="muted"
      border="bottom"
    >
      <Column gap="0" flexGrow="1" style={{ maxWidth: '70%' }}>
        <Text size="sm" weight="medium">
          {label}
        </Text>
        {description && (
          <Text size="xs" color="muted">
            {description}
          </Text>
        )}
      </Column>
      <Box>{children}</Box>
    </Row>
  );
}

interface SettingsToggleProps {
  label: string;
  description?: string;
  isSelected: boolean;
  onChange: (selected: boolean) => void;
}

export function SettingsToggle({ label, description, isSelected, onChange }: SettingsToggleProps) {
  return (
    <SettingsRow label={label} description={description}>
      <Switch isSelected={isSelected} onChange={onChange} />
    </SettingsRow>
  );
}

interface SettingsInputProps {
  label: string;
  description?: string;
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  type?: string;
}

export function SettingsInput({
  label,
  description,
  value,
  onChange,
  placeholder,
  type = 'text',
}: SettingsInputProps) {
  return (
    <SettingsRow label={label} description={description}>
      <TextField
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        type={type}
        style={{ width: '12rem' }}
      />
    </SettingsRow>
  );
}
