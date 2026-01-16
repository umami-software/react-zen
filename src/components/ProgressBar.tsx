import {
  ProgressBar as AriaProgressBar,
  type ProgressBarProps as AriaProgressBarProps,
} from 'react-aria-components';
import { Box } from './Box';
import { cn } from './lib/tailwind';
import { Text } from './Text';

export interface ProgressBarProps extends AriaProgressBarProps {
  showPercentage?: boolean;
}

function Track({ children }: { children: React.ReactNode }) {
  return (
    <Box position="relative" borderRadius="full" overflow="hidden" className="w-full h-2 bg-track">
      {children}
    </Box>
  );
}

function Fill({ percentage }: { percentage: number }) {
  return (
    <Box
      position="absolute"
      top="0"
      bottom="0"
      left="0"
      borderRadius="full"
      className="bg-track-fill transition-all"
      style={{ width: `${percentage}%` }}
    />
  );
}

function ProgressBar({ className, showPercentage, ...props }: ProgressBarProps) {
  return (
    <AriaProgressBar {...props} className={cn('flex items-center gap-3 w-full', className)}>
      {({ percentage = 0, valueText }) => {
        return (
          <>
            <Track>
              <Fill percentage={percentage} />
            </Track>
            {showPercentage && <Text className="tabular-nums">{valueText}</Text>}
          </>
        );
      }}
    </AriaProgressBar>
  );
}

export { ProgressBar };
