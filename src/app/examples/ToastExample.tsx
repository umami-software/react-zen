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
        toast('Please check your internet connection.', {
          title: 'Network error',
          children: <Button>Connect</Button>,
        })
      }
    >
      Show toast
    </Button>
  );
}
