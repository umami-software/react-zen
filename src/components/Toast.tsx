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
import classNames from 'classnames';

interface _ToastProps extends ToastProps {
  title?: string;
  description?: string;
  actionText?: string;
  allowClose?: boolean;
}

function Toast({
  title,
  description,
  actionText,
  allowClose = true,
  className,
  children,
  ...props
}: _ToastProps) {
  return (
    <Root {...props} className={classNames(styles.toast, className)}>
      {title && <ToastTitle className={styles.title}>{title}</ToastTitle>}
      {description && (
        <ToastDescription className={styles.description}>{description}</ToastDescription>
      )}
      {children && (
        <ToastAction className={styles.action} altText={actionText || 'Action'}>
          {children}
        </ToastAction>
      )}
      {allowClose && (
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
export type { _ToastProps as ToastProps, ToastProviderProps, ToastViewportProps };
