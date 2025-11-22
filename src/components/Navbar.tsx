import classNames from 'classnames';
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
import styles from './Navbar.module.css';
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
            <ChevronRight />
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
