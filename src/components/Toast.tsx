import classNames from 'classnames';
import { createElement } from 'react';
import {
  ToastProvider,
  ToastProviderProps,
  ToastProps,
  Root,
  ToastTitle,
  ToastDescription,
  ToastAction,
  ToastClose,
  Viewport,
  ToastViewportProps,
} from '@radix-ui/react-toast';
import { Icon } from './Icon';
import { Icons } from './Icons';
import { useToast } from './hooks/useToast';
import styles from './Toast.module.css';

const icons = {
  info: Icons.Info,
  error: Icons.Alert,
};

interface _ToastProps extends ToastProps {
  title?: string;
  description?: string;
  actionText?: string;
  allowClose?: boolean;
  variant?: 'info' | 'error';
}

function Toast({
  title,
  description,
  actionText,
  allowClose = true,
  variant,
  className,
  children,
  ...props
}: _ToastProps) {
  return (
    <Root {...props} className={classNames(styles.toast, className, variant && styles[variant])}>
      <Icon className={styles.icon} size="md">
        {variant && createElement(icons[variant])}
      </Icon>
      {title && <ToastTitle className={styles.title}>{title}</ToastTitle>}
      {description && (
        <ToastDescription className={styles.description}>{description}</ToastDescription>
      )}
      {children && (
        <ToastAction className={styles.action} altText={actionText || 'Action'} asChild>
          {children}
        </ToastAction>
      )}
      {!children && allowClose && (
        <ToastClose className={styles.close} aria-label="Close">
          <Icon size="sm" aria-hidden>
            <Icons.Close />
          </Icon>
        </ToastClose>
      )}
    </Root>
  );
}

function Toaster(props: ToastViewportProps) {
  const { toasts } = useToast();

  return (
    <>
      {toasts.map(({ id, message, props }) => {
        return <Toast {...props} key={id} description={message} />;
      })}
      <Viewport className={styles.viewport} {...props} />
    </>
  );
}

export { Toast, ToastProvider, Toaster };
export type { _ToastProps as ToastProps, ToastProviderProps, ToastViewportProps as ToasterProps };
