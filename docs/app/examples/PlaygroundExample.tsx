'use client';

import { useRef, useState } from 'react';
import {
  Accordion,
  AccordionItem,
  AlertBanner,
  Box,
  Button,
  Checkbox,
  Column,
  Heading,
  Label,
  ListItem,
  ProgressBar,
  Row,
  Select,
  Slider,
  StatusLight,
  Switch,
  Text,
  TextField,
  Toggle,
  useToast,
} from '@/components';

// Tailwind color palette
const tailwindColors = [
  // White/Black
  { label: 'white', value: '#ffffff' },
  { label: 'black', value: '#000000' },
  // Neutral
  { label: 'neutral-50', value: '#fafafa' },
  { label: 'neutral-100', value: '#f5f5f5' },
  { label: 'neutral-200', value: '#e5e5e5' },
  { label: 'neutral-300', value: '#d4d4d4' },
  { label: 'neutral-400', value: '#a3a3a3' },
  { label: 'neutral-500', value: '#737373' },
  { label: 'neutral-600', value: '#525252' },
  { label: 'neutral-700', value: '#404040' },
  { label: 'neutral-800', value: '#262626' },
  { label: 'neutral-900', value: '#171717' },
  { label: 'neutral-950', value: '#0a0a0a' },
  // Slate
  { label: 'slate-50', value: '#f8fafc' },
  { label: 'slate-100', value: '#f1f5f9' },
  { label: 'slate-200', value: '#e2e8f0' },
  { label: 'slate-300', value: '#cbd5e1' },
  { label: 'slate-400', value: '#94a3b8' },
  { label: 'slate-500', value: '#64748b' },
  { label: 'slate-600', value: '#475569' },
  { label: 'slate-700', value: '#334155' },
  { label: 'slate-800', value: '#1e293b' },
  { label: 'slate-900', value: '#0f172a' },
  // Blue
  { label: 'blue-50', value: '#eff6ff' },
  { label: 'blue-100', value: '#dbeafe' },
  { label: 'blue-200', value: '#bfdbfe' },
  { label: 'blue-300', value: '#93c5fd' },
  { label: 'blue-400', value: '#60a5fa' },
  { label: 'blue-500', value: '#3b82f6' },
  { label: 'blue-600', value: '#2563eb' },
  { label: 'blue-700', value: '#1d4ed8' },
  { label: 'blue-800', value: '#1e40af' },
  { label: 'blue-900', value: '#1e3a8a' },
  // Green
  { label: 'green-50', value: '#f0fdf4' },
  { label: 'green-100', value: '#dcfce7' },
  { label: 'green-200', value: '#bbf7d0' },
  { label: 'green-300', value: '#86efac' },
  { label: 'green-400', value: '#4ade80' },
  { label: 'green-500', value: '#22c55e' },
  { label: 'green-600', value: '#16a34a' },
  { label: 'green-700', value: '#15803d' },
  { label: 'green-800', value: '#166534' },
  { label: 'green-900', value: '#14532d' },
  // Yellow
  { label: 'yellow-50', value: '#fefce8' },
  { label: 'yellow-100', value: '#fef9c3' },
  { label: 'yellow-200', value: '#fef08a' },
  { label: 'yellow-300', value: '#fde047' },
  { label: 'yellow-400', value: '#facc15' },
  { label: 'yellow-500', value: '#eab308' },
  { label: 'yellow-600', value: '#ca8a04' },
  { label: 'yellow-700', value: '#a16207' },
  { label: 'yellow-800', value: '#854d0e' },
  { label: 'yellow-900', value: '#713f12' },
  // Red
  { label: 'red-50', value: '#fef2f2' },
  { label: 'red-100', value: '#fee2e2' },
  { label: 'red-200', value: '#fecaca' },
  { label: 'red-300', value: '#fca5a5' },
  { label: 'red-400', value: '#f87171' },
  { label: 'red-500', value: '#ef4444' },
  { label: 'red-600', value: '#dc2626' },
  { label: 'red-700', value: '#b91c1c' },
  { label: 'red-800', value: '#991b1b' },
  { label: 'red-900', value: '#7f1d1d' },
  // Orange
  { label: 'orange-50', value: '#fff7ed' },
  { label: 'orange-100', value: '#ffedd5' },
  { label: 'orange-200', value: '#fed7aa' },
  { label: 'orange-300', value: '#fdba74' },
  { label: 'orange-400', value: '#fb923c' },
  { label: 'orange-500', value: '#f97316' },
  { label: 'orange-600', value: '#ea580c' },
  { label: 'orange-700', value: '#c2410c' },
  { label: 'orange-800', value: '#9a3412' },
  { label: 'orange-900', value: '#7c2d12' },
  // Purple
  { label: 'purple-50', value: '#faf5ff' },
  { label: 'purple-100', value: '#f3e8ff' },
  { label: 'purple-200', value: '#e9d5ff' },
  { label: 'purple-300', value: '#d8b4fe' },
  { label: 'purple-400', value: '#c084fc' },
  { label: 'purple-500', value: '#a855f7' },
  { label: 'purple-600', value: '#9333ea' },
  { label: 'purple-700', value: '#7e22ce' },
  { label: 'purple-800', value: '#6b21a8' },
  { label: 'purple-900', value: '#581c87' },
  // Pink
  { label: 'pink-50', value: '#fdf2f8' },
  { label: 'pink-100', value: '#fce7f3' },
  { label: 'pink-200', value: '#fbcfe8' },
  { label: 'pink-300', value: '#f9a8d4' },
  { label: 'pink-400', value: '#f472b6' },
  { label: 'pink-500', value: '#ec4899' },
  { label: 'pink-600', value: '#db2777' },
  { label: 'pink-700', value: '#be185d' },
  { label: 'pink-800', value: '#9d174d' },
  { label: 'pink-900', value: '#831843' },
];

// Preset value options
const radiusOptions = [
  { label: 'none', value: '0px' },
  { label: 'sm', value: '0.125rem' },
  { label: 'md', value: '0.375rem' },
  { label: 'lg', value: '0.5rem' },
  { label: 'xl', value: '0.75rem' },
  { label: '2xl', value: '1rem' },
  { label: '3xl', value: '1.5rem' },
  { label: 'full', value: '9999px' },
];

const shadowOptions = [
  { label: 'none', value: 'none' },
  { label: 'sm', value: '0 1px 2px 0 rgb(0 0 0 / 0.05)' },
  { label: 'md', value: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)' },
  { label: 'lg', value: '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)' },
  { label: 'xl', value: '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)' },
  { label: '2xl', value: '0 25px 50px -12px rgb(0 0 0 / 0.25)' },
  { label: 'inner', value: 'inset 0 2px 4px 0 rgb(0 0 0 / 0.05)' },
];

const spacingOptions = [
  { label: '0', value: '0px' },
  { label: '1', value: '0.25rem' },
  { label: '2', value: '0.5rem' },
  { label: '3', value: '0.75rem' },
  { label: '4', value: '1rem' },
  { label: '5', value: '1.25rem' },
  { label: '6', value: '1.5rem' },
  { label: '8', value: '2rem' },
  { label: '10', value: '2.5rem' },
  { label: '12', value: '3rem' },
];

const fontOptions = [
  { label: 'System', value: 'system-ui, sans-serif' },
  { label: 'Inter', value: "'Inter', sans-serif" },
  { label: 'Roboto', value: "'Roboto', sans-serif" },
  { label: 'Open Sans', value: "'Open Sans', sans-serif" },
  { label: 'Lato', value: "'Lato', sans-serif" },
  { label: 'Montserrat', value: "'Montserrat', sans-serif" },
  { label: 'Poppins', value: "'Poppins', sans-serif" },
  { label: 'Nunito', value: "'Nunito', sans-serif" },
  { label: 'PT Sans', value: "'PT Sans', sans-serif" },
];

const fontMonoOptions = [
  { label: 'System Mono', value: 'ui-monospace, monospace' },
  { label: 'JetBrains Mono', value: "'JetBrains Mono', monospace" },
  { label: 'Fira Code', value: "'Fira Code', monospace" },
  { label: 'Source Code Pro', value: "'Source Code Pro', monospace" },
  { label: 'IBM Plex Mono', value: "'IBM Plex Mono', monospace" },
  { label: 'Roboto Mono', value: "'Roboto Mono', monospace" },
  { label: 'Inconsolata', value: "'Inconsolata', monospace" },
  { label: 'Space Mono', value: "'Space Mono', monospace" },
];

interface SelectOption {
  label: string;
  value: string;
}

interface CSSVariable {
  name: string;
  label: string;
  defaultValue: string;
  type?: 'color' | 'select';
  options?: SelectOption[];
}

// Defaults - affects borderRadius={true}, shadow={true}, padding={true}, gap={true}
const defaultsVariables: CSSVariable[] = [
  {
    name: '--radius-default',
    label: 'Border Radius',
    defaultValue: '0.375rem',
    type: 'select',
    options: radiusOptions,
  },
  {
    name: '--shadow-default',
    label: 'Shadow',
    defaultValue: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
    type: 'select',
    options: shadowOptions,
  },
  {
    name: '--padding-x-default',
    label: 'Padding X',
    defaultValue: '0.75rem',
    type: 'select',
    options: spacingOptions,
  },
  {
    name: '--padding-y-default',
    label: 'Padding Y',
    defaultValue: '0.75rem',
    type: 'select',
    options: spacingOptions,
  },
  {
    name: '--gap-default',
    label: 'Gap',
    defaultValue: '0.75rem',
    type: 'select',
    options: spacingOptions,
  },
  {
    name: '--font-family',
    label: 'Font Family',
    defaultValue: 'system-ui, sans-serif',
    type: 'select',
    options: fontOptions,
  },
  {
    name: '--font-family-mono',
    label: 'Font Mono',
    defaultValue: 'ui-monospace, monospace',
    type: 'select',
    options: fontMonoOptions,
  },
];

// Surface variables - affects backgrounds
const surfaceVariables: CSSVariable[] = [
  {
    name: '--surface-base',
    label: 'Base',
    defaultValue: '#ffffff',
    type: 'color',
    options: tailwindColors,
  },
  {
    name: '--surface-raised',
    label: 'Raised',
    defaultValue: '#fafafa',
    type: 'color',
    options: tailwindColors,
  },
  {
    name: '--surface-sunken',
    label: 'Sunken',
    defaultValue: '#f5f5f5',
    type: 'color',
    options: tailwindColors,
  },
  {
    name: '--surface-overlay',
    label: 'Overlay',
    defaultValue: '#ffffff',
    type: 'color',
    options: tailwindColors,
  },
  {
    name: '--surface-inverted',
    label: 'Inverted',
    defaultValue: '#171717',
    type: 'color',
    options: tailwindColors,
  },
  {
    name: '--surface-disabled',
    label: 'Disabled',
    defaultValue: '#fafafa',
    type: 'color',
    options: tailwindColors,
  },
];

// Text variables - affects text colors
const textVariables: CSSVariable[] = [
  {
    name: '--text-primary',
    label: 'Primary',
    defaultValue: '#171717',
    type: 'color',
    options: tailwindColors,
  },
  {
    name: '--text-secondary',
    label: 'Secondary',
    defaultValue: '#525252',
    type: 'color',
    options: tailwindColors,
  },
  {
    name: '--text-muted',
    label: 'Muted',
    defaultValue: '#737373',
    type: 'color',
    options: tailwindColors,
  },
  {
    name: '--text-disabled',
    label: 'Disabled',
    defaultValue: '#a3a3a3',
    type: 'color',
    options: tailwindColors,
  },
  {
    name: '--text-inverted',
    label: 'Inverted',
    defaultValue: '#fafafa',
    type: 'color',
    options: tailwindColors,
  },
  {
    name: '--text-on-primary',
    label: 'On Primary',
    defaultValue: '#ffffff',
    type: 'color',
    options: tailwindColors,
  },
];

// Border variables - affects borders
const borderVariables: CSSVariable[] = [
  {
    name: '--border-default',
    label: 'Default',
    defaultValue: '#d4d4d4',
    type: 'color',
    options: tailwindColors,
  },
  {
    name: '--border-muted',
    label: 'Muted',
    defaultValue: '#e5e5e5',
    type: 'color',
    options: tailwindColors,
  },
  {
    name: '--border-strong',
    label: 'Strong',
    defaultValue: '#a3a3a3',
    type: 'color',
    options: tailwindColors,
  },
  {
    name: '--border-inverted',
    label: 'Inverted',
    defaultValue: '#171717',
    type: 'color',
    options: tailwindColors,
  },
];

// Interactive variables - affects buttons, toggles, checkboxes
const interactiveVariables: CSSVariable[] = [
  {
    name: '--interactive-bg',
    label: 'Background',
    defaultValue: '#f5f5f5',
    type: 'color',
    options: tailwindColors,
  },
  {
    name: '--interactive-bg-hover',
    label: 'Hover',
    defaultValue: '#e5e5e5',
    type: 'color',
    options: tailwindColors,
  },
  {
    name: '--interactive-bg-pressed',
    label: 'Pressed',
    defaultValue: '#d4d4d4',
    type: 'color',
    options: tailwindColors,
  },
  {
    name: '--interactive-bg-selected',
    label: 'Selected',
    defaultValue: '#171717',
    type: 'color',
    options: tailwindColors,
  },
  {
    name: '--interactive-text-selected',
    label: 'Selected Text',
    defaultValue: '#ffffff',
    type: 'color',
    options: tailwindColors,
  },
];

// Focus variables - affects focus rings
const focusVariables: CSSVariable[] = [
  {
    name: '--focus-ring',
    label: 'Ring',
    defaultValue: '#a3a3a3',
    type: 'color',
    options: tailwindColors,
  },
  {
    name: '--focus-ring-offset',
    label: 'Offset',
    defaultValue: '#ffffff',
    type: 'color',
    options: tailwindColors,
  },
];

// Track variables - affects sliders, progress bars
const trackVariables: CSSVariable[] = [
  {
    name: '--track-bg',
    label: 'Background',
    defaultValue: '#e5e5e5',
    type: 'color',
    options: tailwindColors,
  },
  {
    name: '--track-fill',
    label: 'Fill',
    defaultValue: '#171717',
    type: 'color',
    options: tailwindColors,
  },
];

// Status variables - affects alerts, status lights
const statusVariables: CSSVariable[] = [
  {
    name: '--status-info',
    label: 'Info',
    defaultValue: '#3b82f6',
    type: 'color',
    options: tailwindColors,
  },
  {
    name: '--status-info-bg',
    label: 'Info BG',
    defaultValue: '#eff6ff',
    type: 'color',
    options: tailwindColors,
  },
  {
    name: '--status-info-text',
    label: 'Info Text',
    defaultValue: '#1e3a8a',
    type: 'color',
    options: tailwindColors,
  },
  {
    name: '--status-success',
    label: 'Success',
    defaultValue: '#22c55e',
    type: 'color',
    options: tailwindColors,
  },
  {
    name: '--status-success-bg',
    label: 'Success BG',
    defaultValue: '#f0fdf4',
    type: 'color',
    options: tailwindColors,
  },
  {
    name: '--status-success-text',
    label: 'Success Text',
    defaultValue: '#14532d',
    type: 'color',
    options: tailwindColors,
  },
  {
    name: '--status-warning',
    label: 'Warning',
    defaultValue: '#eab308',
    type: 'color',
    options: tailwindColors,
  },
  {
    name: '--status-warning-bg',
    label: 'Warning BG',
    defaultValue: '#fefce8',
    type: 'color',
    options: tailwindColors,
  },
  {
    name: '--status-warning-text',
    label: 'Warning Text',
    defaultValue: '#713f12',
    type: 'color',
    options: tailwindColors,
  },
  {
    name: '--status-error',
    label: 'Error',
    defaultValue: '#ef4444',
    type: 'color',
    options: tailwindColors,
  },
  {
    name: '--status-error-bg',
    label: 'Error BG',
    defaultValue: '#fef2f2',
    type: 'color',
    options: tailwindColors,
  },
  {
    name: '--status-error-text',
    label: 'Error Text',
    defaultValue: '#7f1d1d',
    type: 'color',
    options: tailwindColors,
  },
];

const allVariables = [
  ...defaultsVariables,
  ...surfaceVariables,
  ...textVariables,
  ...borderVariables,
  ...interactiveVariables,
  ...focusVariables,
  ...trackVariables,
  ...statusVariables,
];

function VariableInput({
  variable,
  value,
  onChange,
}: {
  variable: CSSVariable;
  value: string;
  onChange: (name: string, value: string) => void;
}) {
  if (variable.type === 'select' && variable.options) {
    const selectedOption = variable.options.find(opt => opt.value === value);
    return (
      <Column gap="1">
        <Label>{variable.label}</Label>
        <Select
          value={value}
          onChange={key => onChange(variable.name, key as string)}
          renderValue={selectedOption?.label || 'Select...'}
        >
          {variable.options.map(opt => (
            <ListItem key={opt.value} id={opt.value}>
              {opt.label}
            </ListItem>
          ))}
        </Select>
      </Column>
    );
  }

  if (variable.type === 'color' && variable.options) {
    const selectedOption = variable.options.find(opt => opt.value === value);
    return (
      <Column gap="1">
        <Label>{variable.label}</Label>
        <Select
          value={value}
          onChange={key => onChange(variable.name, key as string)}
          renderValue={
            selectedOption ? (
              <Row gap="2" alignItems="center">
                <Box
                  width="4"
                  height="4"
                  borderRadius="sm"
                  border
                  style={{ backgroundColor: selectedOption.value }}
                />
                <Text size="sm">{selectedOption.label}</Text>
              </Row>
            ) : (
              'Select...'
            )
          }
        >
          {variable.options.map(opt => (
            <ListItem key={opt.value} id={opt.value}>
              <Row gap="2" alignItems="center">
                <Box
                  width="4"
                  height="4"
                  borderRadius="sm"
                  border
                  style={{ backgroundColor: opt.value }}
                />
                <Text size="sm">{opt.label}</Text>
              </Row>
            </ListItem>
          ))}
        </Select>
      </Column>
    );
  }

  return (
    <Column gap="1">
      <Label>{variable.label}</Label>
      <Text size="sm" color="muted" style={{ fontFamily: 'var(--font-family-mono)' }}>
        {value}
      </Text>
    </Column>
  );
}

function VariableSection({
  title,
  variables,
  values,
  onChange,
}: {
  title: string;
  variables: CSSVariable[];
  values: Record<string, string>;
  onChange: (name: string, value: string) => void;
}) {
  return (
    <AccordionItem id={title}>
      <Text>{title}</Text>
      <Box paddingY="2" paddingX="2">
        <Column gap="2">
          {variables.map(variable => (
            <VariableInput
              key={variable.name}
              variable={variable}
              value={values[variable.name] || variable.defaultValue}
              onChange={onChange}
            />
          ))}
        </Column>
      </Box>
    </AccordionItem>
  );
}

// Load Google Font dynamically
const loadGoogleFont = (fontFamily: string) => {
  // Extract font name from value like "'Inter', sans-serif"
  const match = fontFamily.match(/'([^']+)'/);
  if (!match) return; // Skip system fonts

  const fontName = match[1];
  const fontId = `google-font-${fontName.replace(/\s+/g, '-').toLowerCase()}`;

  // Check if already loaded
  if (document.getElementById(fontId)) return;

  // Create and append link element
  const link = document.createElement('link');
  link.id = fontId;
  link.rel = 'stylesheet';
  link.href = `https://fonts.googleapis.com/css2?family=${fontName.replace(/\s+/g, '+')}:wght@300;400;500;600;700&display=swap`;
  document.head.appendChild(link);
};

export function PlaygroundExample() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { toast } = useToast();
  const [values, setValues] = useState<Record<string, string>>(() => {
    const initial: Record<string, string> = {};
    allVariables.forEach(v => {
      initial[v.name] = v.defaultValue;
    });
    return initial;
  });

  const [checked, setChecked] = useState(true);
  const [switchOn, setSwitchOn] = useState(true);
  const [sliderValue, setSliderValue] = useState(65);

  const handleChange = (name: string, value: string) => {
    setValues(prev => ({ ...prev, [name]: value }));

    // Load Google Font if it's a font-family change
    if (name === '--font-family' || name === '--font-family-mono') {
      loadGoogleFont(value);
    }

    if (containerRef.current) {
      containerRef.current.style.setProperty(name, value);
    }
  };

  const handleReset = () => {
    const resetValues: Record<string, string> = {};
    allVariables.forEach(v => {
      resetValues[v.name] = v.defaultValue;
    });
    setValues(resetValues);
    if (containerRef.current) {
      allVariables.forEach(v => {
        containerRef.current!.style.removeProperty(v.name);
      });
    }
  };

  const handleExport = () => {
    const css = Object.entries(values)
      .map(([name, value]) => `  ${name}: ${value};`)
      .join('\n');
    navigator.clipboard.writeText(`:root {\n${css}\n}`);
    toast('CSS variables copied to clipboard');
  };

  return (
    <Box
      ref={containerRef}
      backgroundColor="surface-base"
      borderRadius="lg"
      border
      overflow="hidden"
      style={{
        fontFamily: 'var(--font-family)',
      }}
    >
      <Row alignItems="stretch">
        {/* Controls Sidebar */}
        <Box
          backgroundColor="surface-raised"
          padding="6"
          width="300px"
          border="right"
          flexShrink="0"
        >
          <Column gap="3">
            <Row justifyContent="space-between" alignItems="center">
              <Text size="sm" weight="semibold">
                CSS Variables
              </Text>
              <Row gap="2">
                <Button variant="outline" size="xs" onPress={handleExport}>
                  Copy
                </Button>
                <Button variant="outline" size="xs" onPress={handleReset}>
                  Reset
                </Button>
              </Row>
            </Row>

            <Accordion allowsMultipleExpanded defaultExpandedKeys={['Defaults', 'Surfaces']}>
              <VariableSection
                title="Defaults"
                variables={defaultsVariables}
                values={values}
                onChange={handleChange}
              />
              <VariableSection
                title="Surfaces"
                variables={surfaceVariables}
                values={values}
                onChange={handleChange}
              />
              <VariableSection
                title="Text"
                variables={textVariables}
                values={values}
                onChange={handleChange}
              />
              <VariableSection
                title="Borders"
                variables={borderVariables}
                values={values}
                onChange={handleChange}
              />
              <VariableSection
                title="Interactive"
                variables={interactiveVariables}
                values={values}
                onChange={handleChange}
              />
              <VariableSection
                title="Focus"
                variables={focusVariables}
                values={values}
                onChange={handleChange}
              />
              <VariableSection
                title="Tracks"
                variables={trackVariables}
                values={values}
                onChange={handleChange}
              />
              <VariableSection
                title="Status"
                variables={statusVariables}
                values={values}
                onChange={handleChange}
              />
            </Accordion>
          </Column>
        </Box>

        {/* Preview Content */}
        <Box padding="8" flexGrow="1">
          <Column gap="12">
            {/* Typography */}
            <Column gap="3">
              <Text size="xs" weight="semibold" color="muted">
                TYPOGRAPHY
              </Text>
              <Column gap="2">
                <Text size="lg" weight="semibold">
                  The quick brown fox jumps over the lazy dog
                </Text>
                <Text>Regular text using font-family variable</Text>
                <Text size="sm" style={{ fontFamily: 'var(--font-family-mono)' }}>
                  const monospace = "using font-family-mono variable";
                </Text>
              </Column>
            </Column>

            {/* Defaults */}
            <Column gap="3">
              <Text size="xs" weight="semibold" color="muted">
                DEFAULTS
              </Text>
              <Row gap="3" wrap="wrap">
                <Box border borderRadius padding shadow>
                  <Text>borderRadius, padding, shadow</Text>
                </Box>
                <Row gap border borderRadius padding>
                  <Text>Item 1</Text>
                  <Text>Item 2</Text>
                  <Text>Item 3</Text>
                </Row>
              </Row>
            </Column>

            {/* Surfaces & Text */}
            <Column gap="3">
              <Text size="xs" weight="semibold" color="muted">
                SURFACES & TEXT
              </Text>
              <Row gap="3" wrap="wrap">
                <Box
                  backgroundColor="surface-base"
                  border
                  borderRadius
                  padding="3"
                  minWidth="100px"
                >
                  <Column gap="1">
                    <Text size="xs" color="muted">
                      Base
                    </Text>
                    <Text>Primary text</Text>
                  </Column>
                </Box>
                <Box
                  backgroundColor="surface-raised"
                  border
                  borderRadius
                  padding="3"
                  minWidth="100px"
                >
                  <Column gap="1">
                    <Text size="xs" color="muted">
                      Raised
                    </Text>
                    <Text color="secondary">Secondary</Text>
                  </Column>
                </Box>
                <Box
                  backgroundColor="surface-sunken"
                  border
                  borderRadius
                  padding="3"
                  minWidth="100px"
                >
                  <Column gap="1">
                    <Text size="xs" color="muted">
                      Sunken
                    </Text>
                    <Text color="muted">Muted text</Text>
                  </Column>
                </Box>
                <Box
                  backgroundColor="surface-inverted"
                  border
                  borderRadius
                  padding="3"
                  minWidth="100px"
                >
                  <Column gap="1">
                    <Text size="xs" color="inverted">
                      Inverted
                    </Text>
                    <Text color="inverted">Inverted text</Text>
                  </Column>
                </Box>
              </Row>
            </Column>

            {/* Borders */}
            <Column gap="3">
              <Text size="xs" weight="semibold" color="muted">
                BORDERS
              </Text>
              <Row gap="3" wrap="wrap">
                <Box border borderRadius padding="3">
                  <Text>Default border</Text>
                </Box>
                <Box borderColor="muted" border borderRadius padding="3">
                  <Text>Muted border</Text>
                </Box>
                <Box borderColor="strong" border borderRadius padding="3">
                  <Text>Strong border</Text>
                </Box>
              </Row>
            </Column>

            {/* Interactive */}
            <Column gap="3">
              <Text size="xs" weight="semibold" color="muted">
                INTERACTIVE
              </Text>
              <Row gap="3" wrap="wrap" alignItems="center">
                <Button variant="primary">Primary</Button>
                <Button>Default</Button>
                <Button variant="outline">Outline</Button>
                <Button variant="quiet">Quiet</Button>
              </Row>
              <Row gap="4" wrap="wrap" alignItems="center">
                <Toggle isSelected>Selected</Toggle>
                <Checkbox isSelected={checked} onChange={setChecked}>
                  Checkbox
                </Checkbox>
                <Switch isSelected={switchOn} onChange={setSwitchOn}>
                  Switch
                </Switch>
              </Row>
            </Column>

            {/* Focus */}
            <Column gap="3">
              <Text size="xs" weight="semibold" color="muted">
                FOCUS (click to focus)
              </Text>
              <Row gap="3" wrap="wrap">
                <Box maxWidth="48">
                  <TextField placeholder="Focus me..." />
                </Box>
                <Button variant="outline">Focus me</Button>
              </Row>
            </Column>

            {/* Tracks */}
            <Column gap="3">
              <Text size="xs" weight="semibold" color="muted">
                TRACKS
              </Text>
              <Column gap="3" maxWidth="xs">
                <Slider
                  value={sliderValue}
                  onChange={v => setSliderValue(v as number)}
                  minValue={0}
                  maxValue={100}
                />
                <ProgressBar value={sliderValue} />
              </Column>
            </Column>

            {/* Status */}
            <Column gap="3">
              <Text size="xs" weight="semibold" color="muted">
                STATUS
              </Text>
              <Row gap="3" wrap="wrap">
                <StatusLight variant="info">Info</StatusLight>
                <StatusLight variant="success">Success</StatusLight>
                <StatusLight variant="warning">Warning</StatusLight>
                <StatusLight variant="error">Error</StatusLight>
              </Row>
              <Column gap="2">
                <AlertBanner variant="info">Info alert message</AlertBanner>
                <AlertBanner variant="success">Success alert message</AlertBanner>
                <AlertBanner variant="warning">Warning alert message</AlertBanner>
                <AlertBanner variant="error">Error alert message</AlertBanner>
              </Column>
            </Column>
          </Column>
        </Box>
      </Row>
    </Box>
  );
}
