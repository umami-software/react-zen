import { HTMLAttributes } from 'react';
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

function Tooltip({ children, className, showArrow, ...props }: TooltipProps) {
  return (
    <AriaTooltip {...props} className={classNames(styles.tooltip, className)}>
      <TooltipBubble showArrow={showArrow}>{children as any}</TooltipBubble>
    </AriaTooltip>
  );
}

interface TooltipBubbleProps extends HTMLAttributes<HTMLDivElement> {
  showArrow?: boolean;
}

function TooltipBubble({ showArrow, children, ...props }: TooltipBubbleProps) {
  return (
    <div {...props}>
      {showArrow && (
        <OverlayArrow className={styles.arrow}>
          <svg width={8} height={8} viewBox="0 0 8 8">
            <path d="M0 0 L4 4 L8 0" />
          </svg>
        </OverlayArrow>
      )}
      <div className={styles.bubble}>{children}</div>
    </div>
  );
}

export { Tooltip, TooltipBubble };
export type { TooltipProps, TooltipBubbleProps };
