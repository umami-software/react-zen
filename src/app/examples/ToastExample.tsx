import { Button, useToast } from '@/components';

export function ToastExample() {
  const { toast } = useToast();

  return <Button onPress={() => toast('Your message has been sent.')}>Show toast</Button>;
}

export function ToastTitleExample() {
  const { toast } = useToast();

  return (
    <Button
      onPress={() =>
        toast('The application encountered an error.', { title: 'Oops! Something went wrong.' })
      }
    >
      Show toast
    </Button>
  );
}

export function ToastActionExample() {
  const { toast } = useToast();

  return (
    <Button
      onPress={() =>
        toast('The task was deleted successfully.', {
          title: 'Task deleted',
          children: <Button>Undo</Button>,
        })
      }
    >
      Show toast
    </Button>
  );
}
