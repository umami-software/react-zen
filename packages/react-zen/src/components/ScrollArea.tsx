import { ScrollArea as BaseScrollArea } from '@base-ui/react/scroll-area';
import type { CSSProperties, ReactNode } from 'react';
import { cn } from './lib/tailwind';

export interface ScrollAreaProps extends BaseScrollArea.Root.Props {
  maxHeight?: string | number;
  orientation?: 'vertical' | 'horizontal' | 'both';
  children?: ReactNode;
  className?: string;
  style?: CSSProperties;
}

const scrollbarClasses = [
  'flex touch-none select-none justify-center rounded bg-transparent',
  'opacity-0 transition-opacity duration-200 delay-300',
  'data-[hovering]:opacity-100 data-[hovering]:delay-0',
  'data-[scrolling]:opacity-100 data-[scrolling]:delay-0',
];

export function ScrollArea({
  maxHeight,
  orientation = 'vertical',
  className,
  style,
  children,
  ...props
}: ScrollAreaProps) {
  const showVertical = orientation !== 'horizontal';
  const showHorizontal = orientation !== 'vertical';

  return (
    <BaseScrollArea.Root
      {...props}
      className={cn('relative overflow-hidden', className)}
      style={style}
    >
      <BaseScrollArea.Viewport
        className="size-full overscroll-contain rounded-[inherit] outline-none focus-visible:ring-2 focus-visible:ring-focus-ring"
        style={{ maxHeight }}
      >
        <BaseScrollArea.Content>{children}</BaseScrollArea.Content>
      </BaseScrollArea.Viewport>
      {showVertical && (
        <BaseScrollArea.Scrollbar
          orientation="vertical"
          className={cn(scrollbarClasses, 'w-1.5 mr-0.5')}
        >
          <BaseScrollArea.Thumb className="w-full rounded bg-edge-strong" />
        </BaseScrollArea.Scrollbar>
      )}
      {showHorizontal && (
        <BaseScrollArea.Scrollbar
          orientation="horizontal"
          className={cn(scrollbarClasses, 'h-1.5 mb-0.5 flex-col')}
        >
          <BaseScrollArea.Thumb className="h-full rounded bg-edge-strong" />
        </BaseScrollArea.Scrollbar>
      )}
      {orientation === 'both' && <BaseScrollArea.Corner />}
    </BaseScrollArea.Root>
  );
}
