'use client';
import {
  Form,
  FormField,
  FormResetButton,
  FormSubmitButton,
  TextField,
  PasswordField,
  Row,
  Checkbox,
  SearchField,
  Box,
  TextArea,
  RadioGroup,
  Radio,
  Select,
  Switch,
  Toggle,
  Slider,
} from '@/components';

export function FormInputsExample() {
  const handleSubmit = (values: any) => {
    console.log({ values });
  };

  return (
    <Row gap="lg">
      <Form gap="lg" onSubmit={handleSubmit} style={{ width: '300px', margin: '0 auto' }}>
        <FormField name="name" label="Name">
          <TextField autoComplete="off" />
        </FormField>
        <FormField name="bio" label="Bio">
          <TextArea autoComplete="off" resize="none" />
        </FormField>
        <FormField name="password" label="Password">
          <PasswordField autoComplete="off" />
        </FormField>
        <FormField name="search" label="Search">
          <SearchField autoComplete="off" />
        </FormField>
        <FormField name="select" label="Select">
          <Select items={['One', 'Two', 'Three']} />
        </FormField>
        <FormField name="checkbox" label="Checkbox">
          <Checkbox>Checkbox</Checkbox>
        </FormField>
        <FormField name="radio" label="Radio">
          <RadioGroup>
            <Radio value="one">Option one</Radio>
            <Radio value="two">Option two</Radio>
            <Radio value="three">Option three</Radio>
          </RadioGroup>
        </FormField>
        <FormField name="toggle" label="Toggle">
          <Toggle>B</Toggle>
        </FormField>
        <FormField name="switch" label="Switch">
          <Switch />
        </FormField>
        <FormField name="slider" label="Slider">
          <Slider />
        </FormField>
        <Row gap="md" alignItems="center" justifyContent="flex-end">
          <FormResetButton>Reset</FormResetButton>
          <FormSubmitButton variant="primary">Submit</FormSubmitButton>
        </Row>
      </Form>
      <Box></Box>
    </Row>
  );
}
