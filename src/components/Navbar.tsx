import {
  createContext,
  type Dispatch,
  type HTMLAttributes,
  type ReactNode,
  type SetStateAction,
  useContext,
  useState,
} from 'react';
import { ChevronRight } from '@/components/icons';
import { HoverTrigger } from './HoverTrigger';
import { Icon } from './Icon';
import { cn } from './lib/tailwind';
import { Row } from './Row';
import { Text } from './Text';

export type NavigationContext = {
  activeMenu: string;
  setActiveMenu: Dispatch<SetStateAction<string>>;
};

export const NavbarContext = createContext<NavigationContext | undefined>(undefined);

export interface NavbarProps extends HTMLAttributes<HTMLElement> {
  showArrow?: boolean;
}

export const useNavigationContext = () => {
  const context = useContext(NavbarContext);
  if (!context) {
    throw new Error('useNavigationContext must be used within a Navbar');
  }
  return context;
};

export function Navbar({
  showArrow = true,
  className,
  children,
  color: _color,
  ...props
}: NavbarProps) {
  const [activeMenu, setActiveMenu] = useState<string>('');

  return (
    <NavbarContext.Provider value={{ activeMenu, setActiveMenu }}>
      <Row {...props} alignItems="center" gap="1" className={className}>
        {children}
      </Row>
    </NavbarContext.Provider>
  );
}

export interface NavbarItemProps extends HTMLAttributes<HTMLElement> {
  label?: string;
  children?: ReactNode;
}

export function NavbarItem({
  label,
  children,
  className,
  color: _color,
  ...props
}: NavbarItemProps) {
  const { activeMenu, setActiveMenu } = useNavigationContext();

  if (label) {
    return (
      <HoverTrigger isOpen={activeMenu === label} onHoverStart={() => setActiveMenu(label)}>
        <Row
          {...props}
          alignItems="center"
          gap="1"
          paddingX="3"
          paddingY="2"
          rounded="md"
          className={cn('cursor-pointer', 'hover:bg-interactive', className)}
        >
          <Text>{label}</Text>
          <Icon rotate={90} size="sm" color="muted">
            <ChevronRight />
          </Icon>
        </Row>
        {children as any}
      </HoverTrigger>
    );
  }

  return (
    <Row
      {...props}
      alignItems="center"
      gap="1"
      paddingX="3"
      paddingY="2"
      rounded="md"
      className={cn('cursor-pointer', 'hover:bg-interactive', className)}
    >
      {children}
    </Row>
  );
}
