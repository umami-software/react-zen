'use client';

import { useRef, useState } from 'react';
import {
  AlertBanner,
  Box,
  Button,
  Checkbox,
  Column,
  Heading,
  ProgressBar,
  Row,
  Slider,
  StatusLight,
  Switch,
  Text,
  TextField,
} from '@/components';

interface CSSVariable {
  name: string;
  label: string;
  defaultValue: string;
}

const variables: CSSVariable[] = [
  { name: '--surface-base', label: 'Surface Base', defaultValue: '#ffffff' },
  { name: '--surface-raised', label: 'Surface Raised', defaultValue: '#fafafa' },
  { name: '--text-primary', label: 'Text Primary', defaultValue: '#171717' },
  { name: '--text-muted', label: 'Text Muted', defaultValue: '#737373' },
  { name: '--border-default', label: 'Border Default', defaultValue: '#d4d4d4' },
  { name: '--interactive-bg-selected', label: 'Selected', defaultValue: '#171717' },
];

function ColorInput({
  variable,
  value,
  onChange,
}: {
  variable: CSSVariable;
  value: string;
  onChange: (name: string, value: string) => void;
}) {
  return (
    <Row gap="2" alignItems="center">
      <input
        type="color"
        value={value}
        onChange={e => onChange(variable.name, e.target.value)}
        className="w-8 h-8 rounded cursor-pointer border border-[var(--border-default)]"
      />
      <Column gap="0">
        <Text size="sm">{variable.label}</Text>
        <Text size="xs" color="muted" className="font-mono">
          {value}
        </Text>
      </Column>
    </Row>
  );
}

export function PlaygroundExample() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [values, setValues] = useState<Record<string, string>>(() => {
    const initial: Record<string, string> = {};
    variables.forEach(v => {
      initial[v.name] = v.defaultValue;
    });
    return initial;
  });

  const [checked, setChecked] = useState(false);
  const [switchOn, setSwitchOn] = useState(true);
  const [sliderValue, setSliderValue] = useState(50);

  const handleChange = (name: string, value: string) => {
    setValues(prev => ({ ...prev, [name]: value }));
    if (containerRef.current) {
      containerRef.current.style.setProperty(name, value);
    }
  };

  const handleReset = () => {
    const resetValues: Record<string, string> = {};
    variables.forEach(v => {
      resetValues[v.name] = v.defaultValue;
    });
    setValues(resetValues);
    if (containerRef.current) {
      variables.forEach(v => {
        containerRef.current!.style.removeProperty(v.name);
      });
    }
  };

  const handleExport = () => {
    const css = Object.entries(values)
      .map(([name, value]) => `  ${name}: ${value};`)
      .join('\n');
    navigator.clipboard.writeText(`:root {\n${css}\n}`);
  };

  return (
    <Row gap="6" wrap="wrap" alignItems="start">
      {/* Controls Panel */}
      <Box backgroundColor="surface-raised" borderRadius="lg" border padding="4" width="300px">
        <Column gap="4">
          <Row justifyContent="space-between" alignItems="center">
            <Heading size="sm">CSS Variables</Heading>
            <Row gap="2">
              <Button variant="outline" size="xs" onPress={handleExport}>
                Copy
              </Button>
              <Button variant="outline" size="xs" onPress={handleReset}>
                Reset
              </Button>
            </Row>
          </Row>
          <Column gap="3">
            {variables.map(variable => (
              <ColorInput
                key={variable.name}
                variable={variable}
                value={values[variable.name]}
                onChange={handleChange}
              />
            ))}
          </Column>
        </Column>
      </Box>

      {/* Preview Panel */}
      <Box
        ref={containerRef}
        backgroundColor="surface-base"
        borderRadius="lg"
        border
        padding="6"
        flexGrow="1"
        minWidth="300px"
      >
        <Column gap="6">
          <Heading size="sm">Component Preview</Heading>

          {/* Buttons */}
          <Column gap="3">
            <Text size="sm" weight="semibold" color="secondary">
              Buttons
            </Text>
            <Row gap="2" wrap="wrap">
              <Button>Primary</Button>
              <Button variant="secondary">Secondary</Button>
              <Button variant="outline">Outline</Button>
              <Button variant="ghost">Ghost</Button>
            </Row>
          </Column>

          {/* Form Inputs */}
          <Column gap="3">
            <Text size="sm" weight="semibold" color="secondary">
              Form Inputs
            </Text>
            <TextField label="Text Field" placeholder="Enter text..." />
            <Column gap="2">
              <Text size="sm">Slider: {sliderValue}</Text>
              <Slider
                value={sliderValue}
                onChange={v => setSliderValue(v as number)}
                minValue={0}
                maxValue={100}
              />
            </Column>
          </Column>

          {/* Checkboxes & Switches */}
          <Column gap="3">
            <Text size="sm" weight="semibold" color="secondary">
              Controls
            </Text>
            <Row gap="6" wrap="wrap">
              <Checkbox isSelected={checked} onChange={setChecked}>
                Checkbox
              </Checkbox>
              <Switch isSelected={switchOn} onChange={setSwitchOn}>
                Switch
              </Switch>
            </Row>
          </Column>

          {/* Status */}
          <Column gap="3">
            <Text size="sm" weight="semibold" color="secondary">
              Status
            </Text>
            <Row gap="4" wrap="wrap" alignItems="center">
              <StatusLight variant="info">Info</StatusLight>
              <StatusLight variant="success">Success</StatusLight>
              <StatusLight variant="warning">Warning</StatusLight>
              <StatusLight variant="error">Error</StatusLight>
            </Row>
            <ProgressBar value={60} label="Progress" />
          </Column>

          {/* Alerts */}
          <Column gap="3">
            <Text size="sm" weight="semibold" color="secondary">
              Alerts
            </Text>
            <Column gap="2">
              <AlertBanner variant="info">Info message</AlertBanner>
              <AlertBanner variant="success">Success message</AlertBanner>
            </Column>
          </Column>
        </Column>
      </Box>
    </Row>
  );
}
