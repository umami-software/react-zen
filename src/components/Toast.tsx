import { ReactNode } from 'react';
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
import styles from './Toast.module.css';
import classNames from 'classnames';

interface _ToastProps extends ToastProps {
  title?: string;
  description?: string;
}

function Toast({ title, description, className, ...props }: _ToastProps) {
  return (
    <Root {...props} className={classNames(styles.toast, className)}>
      {title && <ToastTitle className={styles.title}>{title}</ToastTitle>}
      {description && (
        <ToastDescription className={styles.description}>{description}</ToastDescription>
      )}
    </Root>
  );
}

function ToastViewport(props: ToastViewportProps) {
  return <Viewport className={styles.viewport} {...props} />;
}

export { Toast, ToastProvider, ToastViewport };
export type { _ToastProps as ToastProps, ToastProviderProps, ToastViewportProps };

export default Toast;
