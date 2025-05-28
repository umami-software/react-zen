import {
  createContext,
  HTMLAttributes,
  ReactNode,
  useContext,
  useState,
  Dispatch,
  SetStateAction,
} from 'react';
import classNames from 'classnames';
import { Chevron } from '@/components/icons';
import { Text } from './Text';
import { Icon } from './Icon';
import { HoverTrigger } from './HoverTrigger';
import styles from './Navbar.module.css';

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

export function Navbar({ showArrow = true, className, children, ...props }: NavbarProps) {
  const [activeMenu, setActiveMenu] = useState<string>('');

  return (
    <NavbarContext.Provider value={{ activeMenu, setActiveMenu }}>
      <div {...props} className={classNames(styles.nav, className)}>
        {children}
      </div>
    </NavbarContext.Provider>
  );
}

export interface NavbarItemProps extends HTMLAttributes<HTMLElement> {
  label?: string;
  children?: ReactNode;
}

export function NavbarItem({ label, children, className, ...props }: NavbarItemProps) {
  const { activeMenu, setActiveMenu } = useNavigationContext();

  if (label) {
    return (
      <HoverTrigger isOpen={activeMenu === label} onHoverStart={() => setActiveMenu(label)}>
        <div {...props} className={classNames(styles.item, className)}>
          <Text>{label}</Text>
          <Icon rotate={90} size="sm" className={styles.icon}>
            <Chevron />
          </Icon>
        </div>
        {children as any}
      </HoverTrigger>
    );
  }

  return (
    <div {...props} className={classNames(styles.item, className)}>
      {children}
    </div>
  );
}
