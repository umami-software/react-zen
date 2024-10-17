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
} from '@/components';

export function FormExample() {
  const handleSubmit = (values: any) => {
    console.log({ values });
  };

  return (
    <Form onSubmit={handleSubmit} style={{ width: '300px', margin: '0 auto' }}>
      <FormField name="username" rules={{ required: 'Username is required' }}>
        <TextField label="Username" autoComplete="off" />
      </FormField>
      <FormField name="password" rules={{ required: 'Password is required' }}>
        <PasswordField label="Password" autoComplete="off" />
      </FormField>
      <FormField name="remember_password">
        <Checkbox>Remember me</Checkbox>
      </FormField>
      <Row gap="md" alignItems="center" justifyContent="flex-end">
        <FormResetButton>Reset</FormResetButton>
        <FormSubmitButton variant="primary">Submit</FormSubmitButton>
      </Row>
    </Form>
  );
}
