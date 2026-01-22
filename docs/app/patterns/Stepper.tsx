'use client';

import { Check } from 'lucide-react';
import { createContext, type ReactNode, useContext, useState } from 'react';
import { Box, type BoxProps, Column, Icon, Row, Text } from '@/components';

interface StepperContextValue {
  currentStep: number;
  totalSteps: number;
  goToStep: (step: number) => void;
  nextStep: () => void;
  prevStep: () => void;
}

const StepperContext = createContext<StepperContextValue>({
  currentStep: 0,
  totalSteps: 0,
  goToStep: () => {},
  nextStep: () => {},
  prevStep: () => {},
});

export function useStepper() {
  return useContext(StepperContext);
}

interface StepperProps extends BoxProps {
  defaultStep?: number;
  totalSteps: number;
  children: ReactNode;
}

export function Stepper({ defaultStep = 0, totalSteps, children, ...props }: StepperProps) {
  const [currentStep, setCurrentStep] = useState(defaultStep);

  const goToStep = (step: number) => {
    if (step >= 0 && step < totalSteps) {
      setCurrentStep(step);
    }
  };

  const nextStep = () => goToStep(currentStep + 1);
  const prevStep = () => goToStep(currentStep - 1);

  return (
    <StepperContext.Provider value={{ currentStep, totalSteps, goToStep, nextStep, prevStep }}>
      <Box {...props}>{children}</Box>
    </StepperContext.Provider>
  );
}

interface StepperHeaderProps {
  children: ReactNode;
}

export function StepperHeader({ children }: StepperHeaderProps) {
  return (
    <Row alignItems="center" justifyContent="space-between" marginBottom="6">
      {children}
    </Row>
  );
}

interface StepProps {
  step: number;
  title: string;
  description?: string;
}

export function Step({ step, title, description }: StepProps) {
  const { currentStep, totalSteps } = useStepper();
  const isCompleted = currentStep > step;
  const isActive = currentStep === step;
  const isLast = step === totalSteps - 1;

  return (
    <Row alignItems="center" flexGrow={isLast ? '0' : '1'}>
      <Row alignItems="center" gap="3">
        <Box
          width="8"
          height="8"
          borderRadius="full"
          backgroundColor={isCompleted || isActive ? 'primary' : 'surface-raised'}
          border={!isCompleted && !isActive}
          borderColor="muted"
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          {isCompleted ? (
            <Icon size="sm" color="on-primary">
              <Check />
            </Icon>
          ) : (
            <Text weight="medium" color={isActive ? 'on-primary' : 'muted'}>
              {step + 1}
            </Text>
          )}
        </Box>
        <Column gap="0">
          <Text weight={isActive ? 'medium' : undefined}>{title}</Text>
          {description && <Text color="muted">{description}</Text>}
        </Column>
      </Row>
      {!isLast && (
        <Box
          flexGrow="1"
          height="1px"
          marginX="4"
          backgroundColor={isCompleted ? 'primary' : 'muted'}
        />
      )}
    </Row>
  );
}

interface StepContentProps extends BoxProps {
  step: number;
  children: ReactNode;
}

export function StepContent({ step, children, ...props }: StepContentProps) {
  const { currentStep } = useStepper();

  if (currentStep !== step) return null;

  return <Box {...props}>{children}</Box>;
}
