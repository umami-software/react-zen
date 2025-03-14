import { ReactNode } from 'react';
import {
  OverlayArrow,
  Tooltip as AriaTooltip,
  TooltipProps as AriaTooltipProps,
} from 'react-aria-components';
import classNames from 'classnames';
import styles from './Tooltip.module.css';

interface TooltipProps extends AriaTooltipProps {
  showArrow?: boolean;
}

function Tooltip({ children, className, showArrow = true, ...props }: TooltipProps) {
  return (
    <AriaTooltip {...props} className={classNames(styles.tooltip, className)}>
      {showArrow && (
        <OverlayArrow className={classNames(styles.arrow)}>
          <svg width={8} height={8} viewBox="0 0 8 8">
            <path d="M0 0 L4 4 L8 0" />
          </svg>
        </OverlayArrow>
      )}
      <TooltipBubble>{children as any}</TooltipBubble>
    </AriaTooltip>
  );
}

function TooltipBubble({ children }: { children?: ReactNode }) {
  return <div className={styles.bubble}>{children}</div>;
}

export { Tooltip, TooltipBubble };
export type { TooltipProps };
