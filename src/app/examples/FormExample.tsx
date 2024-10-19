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

const defaultValues = { username: '', password: '', remember_password: false };

export function FormExample() {
  const handleSubmit = (values: any) => {
    console.log({ values });
  };

  return (
    <Form
      defaultValues={defaultValues}
      onSubmit={handleSubmit}
      style={{ width: '300px', margin: '0 auto' }}
    >
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
        <FormResetButton values={defaultValues}>Reset</FormResetButton>
        <FormSubmitButton variant="primary">Submit</FormSubmitButton>
      </Row>
    </Form>
  );
}
