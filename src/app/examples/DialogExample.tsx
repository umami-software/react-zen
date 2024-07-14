'use client';
import { Dialog, DialogTrigger, Button, TextField, Column } from '@/components';

export function DialogExample() {
  return (
    <DialogTrigger>
      <Button variant="primary">Click me</Button>
      <Dialog>
        {({ close }) => {
          return (
            <Column gap={20}>
              <label>Name</label>
              <TextField />
              <label>Email</label>
              <TextField />
              <Button onPress={close}>Close</Button>
            </Column>
          );
        }}
      </Dialog>
    </DialogTrigger>
  );
}
