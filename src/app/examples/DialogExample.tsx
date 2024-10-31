'use client';
import {
  Dialog,
  DialogTrigger,
  Button,
  TextField,
  Modal,
  Row,
  Form,
  FormField,
} from '@/components';

export function DialogExample() {
  return (
    <DialogTrigger>
      <Button variant="primary">Click me</Button>
      <Modal>
        <Dialog title="Sign up for newsletter">
          {({ close }) => {
            return (
              <Form>
                <FormField name="name" label="Name">
                  <TextField />
                </FormField>
                <FormField name="email" label="Email">
                  <TextField />
                </FormField>
                <Row gap="md" justifyContent="space-between">
                  <Button onPress={close}>Cancel</Button>
                  <Button variant="primary" onPress={close}>
                    Sign up
                  </Button>
                </Row>
              </Form>
            );
          }}
        </Dialog>
      </Modal>
    </DialogTrigger>
  );
}
