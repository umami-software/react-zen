import { useState, useRef } from 'react';
import { Dialog, DialogTrigger, Column, Popover, Switch, Button } from '@/components';

export function PopoverExample() {
  const [show, setShow] = useState(false);
  const overMenu = useRef<boolean>(false);

  const handleHoverStart = () => {
    overMenu.current = false;
    setShow(true);
  };
  const handleHoverEnd = () => {
    setTimeout(() => {
      if (!overMenu.current) {
        setShow(false);
        overMenu.current = false;
      }
    }, 600);
  };

  const handleMenuEnter = () => {
    overMenu.current = true;
  };
  const handleMenuLeave = () => {
    overMenu.current = false;
    setShow(false);
  };

  return (
    <DialogTrigger>
      <Button variant="outline" onHoverStart={handleHoverStart} onHoverEnd={handleHoverEnd}>
        Settings
      </Button>
      <Popover isOpen={show} isNonModal>
        <div onMouseEnter={handleMenuEnter} onMouseLeave={handleMenuLeave}>
          <Dialog>
            <Column gap="md">
              <Switch defaultSelected>Wi-Fi</Switch>
              <Switch defaultSelected>Bluetooth</Switch>
              <Switch>Mute</Switch>
            </Column>
          </Dialog>
        </div>
      </Popover>
    </DialogTrigger>
  );
}
