import type { ProgressRoot } from '@base-ui/react/progress';
import { Progress as BaseProgress } from '@base-ui/react/progress';
import { cn } from './lib/tailwind';
import { Text } from './Text';

export interface ProgressBarProps extends ProgressRoot.Props {
  showPercentage?: boolean;
}

export function ProgressBar({ className, showPercentage, ...props }: ProgressBarProps) {
  return (
    <BaseProgress.Root {...props} className={cn('flex items-center gap-3 w-full', className)}>
      <BaseProgress.Track className="relative overflow-hidden w-full h-2 rounded-full bg-interactive">
        <BaseProgress.Indicator className="h-full rounded-full bg-primary transition-all" />
      </BaseProgress.Track>
      {showPercentage && (
        <Text className="tabular-nums">
          <BaseProgress.Value />
        </Text>
      )}
    </BaseProgress.Root>
  );
}
