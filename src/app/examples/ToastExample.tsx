import { useState, useEffect } from 'react';
import { ToastProvider, Toast, Button, ToastViewport } from '@/components';

export function ToastExample() {
  const [open, setOpen] = useState(false);

  return (
    <ToastProvider swipeDirection="right">
      <Button onPress={() => setOpen(true)}>Open</Button>
      <Toast
        title="Hello!"
        description="How are you my friend?"
        open={open}
        onOpenChange={setOpen}
      />
      <ToastViewport />
    </ToastProvider>
  );
}
