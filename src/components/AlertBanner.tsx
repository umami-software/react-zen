import React, { createElement, ReactNode } from 'react';
import classNames from 'classnames';
import { Icon } from './Icon';
import { Icons } from './Icons';
import styles from './AlertBanner.module.css';

interface AlertBannerProps {
  title?: string;
  description?: string;
  icon?: ReactNode;
  variant?: 'error' | 'info';
  allowClose?: boolean;
  onClose?: () => void;
  className?: string;
  children?: ReactNode;
}

function AlertBanner({
  title,
  description,
  icon,
  variant,
  allowClose,
  onClose,
  children,
  className,
  ...props
}: AlertBannerProps) {
  return (
    <div {...props} className={classNames(styles.banner, className, variant && styles[variant])}>
      {(icon || variant) && (
        <Icon size="md">{variant ? createElement(AlertIcons[variant]) : icon}</Icon>
      )}
      <div className={styles.message}>
        {title && <div className={styles.title}>{title}</div>}
        {description && <div className={styles.description}>{description}</div>}
      </div>
      {children}
      {allowClose && (
        <Icon className={styles.close} onClick={onClose}>
          <Icons.Close />
        </Icon>
      )}
    </div>
  );
}

const AlertIcons = {
  error: Icons.Alert,
  info: Icons.Info,
};

export { AlertBanner, AlertIcons };
export type { AlertBannerProps };
