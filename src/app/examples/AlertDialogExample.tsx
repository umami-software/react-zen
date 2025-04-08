import {
  DialogTrigger,
  Button,
  Modal,
  AlertDialog,
  Row,
  Text,
  Menu,
  MenuItem,
  MenuSection,
} from '@/components';

export function AlertDialogExample() {
  const items = [
    {
      heading: 'Fruits',
      items: [
        { id: 'apple', name: 'Apple' },
        { id: 'orange', name: 'Orange' },
      ],
    },
    {
      heading: 'Vegetables',
      items: [
        { id: 'carrot', name: 'Carrot' },
        { id: 'broccoli', name: 'Broccoli' },
      ],
    },
  ];

  return (
    <Menu>
      <MenuSection items={items} selectionMode="single">
        {({ id, name }) => {
          return <MenuItem id={id}>{name}</MenuItem>;
        }}
      </MenuSection>
    </Menu>
  );

  return (
    <DialogTrigger>
      <Button variant="primary">Delete account</Button>
      <Modal>
        <AlertDialog title="Are you sure you want to delete your account?">
          <Text>This cannot be undone. All your data will be permanantly deleted.</Text>
        </AlertDialog>
      </Modal>
    </DialogTrigger>
  );
}
