import {
  ProgressBar as AriaProgressBar,
  ProgressBarProps as AriaProgressBarProps,
} from 'react-aria-components';
import { Box } from './Box';
import { Row } from './Row';
import { Text } from './Text';
import { cn } from './lib/tailwind';

export interface ProgressBarProps extends AriaProgressBarProps {
  showPercentage?: boolean;
}

function Track({ children }: { children: React.ReactNode }) {
  return (
    <Box borderRadius="full" className="relative w-full h-2 bg-gray-200 dark:bg-gray-700 overflow-hidden">
      {children}
    </Box>
  );
}

function Fill({ percentage }: { percentage: number }) {
  return (
    <Box
      borderRadius="full"
      className="absolute inset-y-0 left-0 bg-gray-900 dark:bg-gray-100 transition-all"
      style={{ width: `${percentage}%` }}
    />
  );
}

function ProgressBar({ className, showPercentage, ...props }: ProgressBarProps) {
  return (
    <AriaProgressBar {...props} className={cn('flex items-center gap-3', className)}>
      {({ percentage = 0, valueText }) => {
        return (
          <>
            <Track>
              <Fill percentage={percentage} />
            </Track>
            {showPercentage && <Text size="sm" className="tabular-nums">{valueText}</Text>}
          </>
        );
      }}
    </AriaProgressBar>
  );
}

export { ProgressBar };
