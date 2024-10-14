'use client';
import {
  Dialog,
  DialogTrigger,
  Button,
  TextField,
  Column,
  Modal,
  PasswordField,
  Label,
} from '@/components';

export function DialogExample() {
  return (
    <DialogTrigger>
      <Button variant="primary">Click me</Button>
      <Modal>
        <Dialog title="Sign up for newsletter">
          {({ close }) => {
            return (
              <Column gap="md">
                <div>
                  <Label htmlFor="name">Name</Label>
                  <TextField id="name" />
                </div>
                <div>
                  <Label htmlFor="email">Email</Label>
                  <TextField id="email" />
                </div>
                <Button variant="primary" onPress={close}>
                  Sign up
                </Button>
              </Column>
            );
          }}
        </Dialog>
      </Modal>
    </DialogTrigger>
  );
}
