import classNames from 'classnames';
import { createElement, HTMLAttributes, createContext } from 'react';
import { useTransition, animated } from '@react-spring/web';
import { Button } from '@/components/Button';
import { Icon } from './Icon';
import { Icons } from './Icons';
import { useToast } from './hooks/useToast';
import styles from './Toast.module.css';

const ToastContext = createContext({});

export interface ToastProviderProps extends HTMLAttributes<HTMLDivElement> {
  position?:
    | 'top-left'
    | 'top'
    | 'top-right'
    | 'bottom-left'
    | 'bottom'
    | 'bottom-right'
    | 'left'
    | 'right';
  duration?: number;
}

const ToastProvider = ({ children, ...config }: ToastProviderProps) => {
  return <ToastContext.Provider value={config}>{children}</ToastContext.Provider>;
};

const icons = {
  info: Icons.Info,
  error: Icons.Alert,
};

interface ToastProps extends HTMLAttributes<HTMLDivElement> {
  message: string;
  title?: string;
  actions?: string[];
  allowClose?: boolean;
  variant?: 'info' | 'error';
  onClose?: (action?: string) => void;
}

function Toast({
  message,
  title,
  actions = [],
  allowClose = true,
  variant,
  className,
  children,
  onClose,
  ...props
}: ToastProps) {
  const hasActions = actions?.length > 0;

  return (
    <div {...props} className={classNames(styles.toast, className, variant && styles[variant])}>
      <Icon className={styles.icon} size="md">
        {variant && createElement(icons[variant])}
      </Icon>
      {title && <div className={styles.title}>{title}</div>}
      {message && <div className={styles.description}>{message}</div>}
      {hasActions &&
        actions.map(action => {
          return (
            <Button key={action} className={styles.action} onPress={() => onClose?.(action)}>
              {action}
            </Button>
          );
        })}
      {!hasActions && allowClose && (
        <Icon
          size="sm"
          aria-hidden
          className={styles.close}
          aria-label="Close"
          onClick={() => onClose?.()}
        >
          <Icons.Close />
        </Icon>
      )}
    </div>
  );
}

function Toaster() {
  const { toasts } = useToast();

  const transitions = useTransition(toasts, {
    from: { opacity: 0, transform: 'translateX(100%)' },
    enter: { opacity: 1, transform: 'translateY(0px)' },
    leave: { opacity: 0, transform: 'translateY(80%)' },
    config: { duration: 100 },
  });

  return (
    <div className={styles.viewport}>
      {transitions((style, item) => {
        const { id, ...props } = item;
        return (
          <animated.div key={id} style={style}>
            <Toast {...props} />
          </animated.div>
        );
      })}
    </div>
  );
}

export { Toast, ToastProvider, ToastContext, Toaster };
export type { ToastProps as ToastProps };
