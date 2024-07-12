import { ReactNode } from 'react';
import { MenuTrigger, MenuProps, Popover } from 'react-aria-components';
import { HiOutlineDotsHorizontal } from 'react-icons/hi';
import Button from './Button';
import Menu from './Menu';

function _MenuButton({
  items,
  children,
  button,
  menuProps,
  ...props
}: {
  items: any[];
  button?: ReactNode;
  menuProps?: MenuProps<any> & Omit<MenuProps<any>, 'children'>;
  children?: ReactNode;
}) {
  return (
    <MenuTrigger {...props}>
      {button || (
        <Button variant="secondary">
          <HiOutlineDotsHorizontal />
        </Button>
      )}
      <Popover>
        <Menu {...menuProps} items={items}>
          {children}
        </Menu>
      </Popover>
    </MenuTrigger>
  );
}

export { _MenuButton as MenuButton };

export default _MenuButton;
