import { ReactNode } from 'react';
import { MenuTrigger, PopoverProps } from 'react-aria-components';
import Popover from './Popover';

interface MenuButtonProps extends PopoverProps {
  placement?: 'top' | 'bottom' | 'left' | 'right';
  children?: ReactNode[];
}

function _MenuButton({ placement, children, ...props }: MenuButtonProps) {
  const [button, menu] = children || [];

  return (
    <MenuTrigger>
      {button}
      <Popover {...props}>{menu}</Popover>
    </MenuTrigger>
  );
}

export { _MenuButton as MenuButton };
export type { MenuButtonProps };

export default _MenuButton;
