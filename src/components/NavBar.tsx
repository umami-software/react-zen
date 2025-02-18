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
import { Text } from './Text';
import { Icon } from './Icon';
import { Icons } from './Icons';
import { HoverTrigger } from './HoverTrigger';
import styles from './NavBar.module.css';

type NavigationContext = {
  activeMenu: string;
  setActiveMenu: Dispatch<SetStateAction<string>>;
};

export const NavBarContext = createContext<NavigationContext | undefined>(undefined);

export interface NavBarProps extends HTMLAttributes<HTMLElement> {
  showArrow?: boolean;
}

const useNavigationContext = () => {
  const context = useContext(NavBarContext);
  if (!context) {
    throw new Error('useNavigationContext must be used within a NavBar');
  }
  return context;
};

export function NavBar({ showArrow = true, className, children, ...props }: NavBarProps) {
  const [activeMenu, setActiveMenu] = useState<string>('');

  return (
    <NavBarContext.Provider value={{ activeMenu, setActiveMenu }}>
      <div {...props} className={classNames(styles.nav, className)}>
        {children}
      </div>
    </NavBarContext.Provider>
  );
}

export interface NavBarItemProps extends HTMLAttributes<HTMLElement> {
  label?: string;
  children?: ReactNode;
}

export function NavBarItem({ label, children, className, ...props }: NavBarItemProps) {
  const { activeMenu, setActiveMenu } = useNavigationContext();

  if (label) {
    return (
      <HoverTrigger isOpen={activeMenu === label} onHoverStart={() => setActiveMenu(label)}>
        <div {...props} className={classNames(styles.item, className)}>
          <Text>{label}</Text>
          <Icon rotate={90} size="xs" className={styles.icon}>
            <Icons.Chevron />
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
