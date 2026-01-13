import { DialogTrigger, Button, Modal, ConfirmationDialog, Text } from '@/components';

export function ConfirmationDialogExample() {
  return (
    <DialogTrigger>
      <Button variant="danger">Delete account</Button>
      <Modal>
        <ConfirmationDialog
          title="Delete account"
          value={'abc123'}
          confirmLabel="Delete"
          isDanger={true}
        >
          <Text>This cannot be undone. All your data will be permananently deleted.</Text>
        </ConfirmationDialog>
      </Modal>
    </DialogTrigger>
  );
}
