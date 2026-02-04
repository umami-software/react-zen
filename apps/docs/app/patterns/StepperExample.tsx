'use client';

import { Button, Row, Text } from '@/components';
import { Step, StepContent, Stepper, StepperHeader, useStepper } from './Stepper';

function StepperNavigation() {
  const { currentStep, totalSteps, nextStep, prevStep } = useStepper();

  return (
    <Row gap="2" marginTop="4">
      <Button variant="outline" onPress={prevStep} isDisabled={currentStep === 0}>
        Previous
      </Button>
      <Button variant="primary" onPress={nextStep} isDisabled={currentStep === totalSteps - 1}>
        {currentStep === totalSteps - 1 ? 'Complete' : 'Next'}
      </Button>
    </Row>
  );
}

export function StepperExample() {
  return (
    <Stepper totalSteps={3}>
      <StepperHeader>
        <Step step={0} title="Account" description="Create your account" />
        <Step step={1} title="Profile" description="Set up your profile" />
        <Step step={2} title="Complete" description="Review and finish" />
      </StepperHeader>

      <StepContent step={0}>
        <Text>Step 1: Enter your account details</Text>
        <StepperNavigation />
      </StepContent>
      <StepContent step={1}>
        <Text>Step 2: Set up your profile</Text>
        <StepperNavigation />
      </StepContent>
      <StepContent step={2}>
        <Text>Step 3: Review and complete</Text>
        <StepperNavigation />
      </StepContent>
    </Stepper>
  );
}
