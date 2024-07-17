import { ReactNode } from 'react';
import { MenuTrigger } from 'react-aria-components';
import { HiOutlineDotsHorizontal } from 'react-icons/hi';
import Button from './Button';
import Popover from './Popover';

interface MenuButtonProps {
  placement?: 'top' | 'bottom' | 'left' | 'right';
  button?: ReactNode;
  children?: ReactNode;
}

function _MenuButton({ placement, button, children, ...props }: MenuButtonProps) {
  return (
    <MenuTrigger {...props}>
      {button || (
        <Button variant="outline">
          <HiOutlineDotsHorizontal />
        </Button>
      )}
      <Popover placement={placement}>{children}</Popover>
    </MenuTrigger>
  );
}

export { _MenuButton as MenuButton };
export type { MenuButtonProps };

export default _MenuButton;
