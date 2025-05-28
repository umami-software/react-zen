import { HTMLAttributes } from 'react';
import classNames from 'classnames';
import { Button } from '@/components/Button';
import { Icon } from '@/components/Icon';
import { Close } from '@/components/icons';
import styles from './Toast.module.css';

const TOAST_CLOSE_ACTION = 'close';

interface ToastProps extends HTMLAttributes<HTMLDivElement> {
  id: string;
  message: string;
  title?: string;
  actions?: string[];
  allowClose?: boolean;
  variant?: 'info' | 'error';
  onClose?: (action?: string) => void;
}

function Toast({
  id,
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
          onClick={() => onClose?.(TOAST_CLOSE_ACTION)}
        >
          <Close />
        </Icon>
      )}
    </div>
  );
}

export { Toast };
export type { ToastProps };
