import { createElement, HTMLAttributes, useEffect } from 'react';
import classNames from 'classnames';
import { Button } from '@/components/Button';
import { Icon } from '@/components/Icon';
import { Icons } from '@/components/Icons';
import { removeToast } from '@/components/hooks/useToast';
import styles from './Toast.module.css';

interface ToastProps extends HTMLAttributes<HTMLDivElement> {
  id: string;
  message: string;
  duration?: number;
  title?: string;
  actions?: string[];
  allowClose?: boolean;
  variant?: 'info' | 'error';
  onClose?: (action?: string) => void;
}

const icons = {
  info: Icons.Info,
  error: Icons.Alert,
};

function Toast({
  id,
  message,
  duration,
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

  const handleClose = (action?: string) => {
    onClose && onClose(action);

    removeToast(id);
  };

  useEffect(() => {
    if (duration) {
      setTimeout(() => removeToast(id), duration);
    }
  }, [duration]);

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
            <Button key={action} className={styles.action} onPress={() => handleClose(action)}>
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
          onClick={() => handleClose()}
        >
          <Icons.Close />
        </Icon>
      )}
    </div>
  );
}

export { Toast };
export type { ToastProps };
