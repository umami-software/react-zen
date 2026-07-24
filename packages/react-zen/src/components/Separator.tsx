import { Separator as BaseSeparator } from '@base-ui/react/separator';
import { cn } from './lib/tailwind';

export interface SeparatorProps extends BaseSeparator.Props {
  orientation?: 'horizontal' | 'vertical';
}

export function Separator({ orientation = 'horizontal', className, ...props }: SeparatorProps) {
  return (
    <BaseSeparator
      {...props}
      orientation={orientation}
      className={cn(
        'shrink-0 bg-edge-muted',
        orientation === 'horizontal' ? 'h-px w-full' : 'w-px self-stretch',
        className,
      )}
    />
  );
}
