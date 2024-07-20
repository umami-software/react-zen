import { DialogTrigger, Button, Modal, AlertDialog, Row, Text } from '@/components';

export function AlertDialogExample() {
  return (
    <DialogTrigger>
      <Button variant="danger">Delete account</Button>
      <Modal>
        <AlertDialog title="Are you sure you want to delete your account?">
          <Text>{'This cannot be undone. All your data will be permanantly deleted.'}</Text>
        </AlertDialog>
      </Modal>
    </DialogTrigger>
  );
}
