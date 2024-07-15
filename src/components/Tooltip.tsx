import { OverlayArrow, Tooltip, TooltipProps } from 'react-aria-components';
import classNames from 'classnames';
import styles from './Tooltip.module.css';

function _Tooltip({ children, className, ...props }: TooltipProps) {
  return (
    <Tooltip {...props} className={classNames(styles.tooltip, className)}>
      <OverlayArrow className={styles.arrow}>
        <svg width={8} height={8} viewBox="0 0 8 8">
          <path d="M0 0 L4 4 L8 0" />
        </svg>
      </OverlayArrow>
      {children as any}
    </Tooltip>
  );
}

export { _Tooltip as Tooltip };
export type { TooltipProps };

export default _Tooltip;
