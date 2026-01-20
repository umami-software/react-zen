import { ProgressBar, type ProgressBarProps } from 'react-aria-components';
import { cn } from './lib/tailwind';

export interface ProgressCircleProps extends ProgressBarProps {
  showPercentage?: boolean;
}

export function ProgressCircle({ className, showPercentage, ...props }: ProgressCircleProps) {
  return (
    <ProgressBar {...props} className={cn('relative flex justify-center items-center', className)}>
      {({ percentage = 0, valueText }) => {
        const radius = 45;
        const circumference = radius * 2 * Math.PI;
        const offset = circumference - (percentage / 100) * circumference;

        return (
          <>
            <svg
              viewBox="0 0 100 100"
              xmlns="http://www.w3.org/2000/svg"
              className="fill-none stroke-[8px] -rotate-90 w-24 h-24"
            >
              <circle className="stroke-interactive" cx="50" cy="50" r="45" />
              <circle
                className="stroke-primary"
                cx="50"
                cy="50"
                r="45"
                strokeDasharray={`${circumference} ${circumference}`}
                strokeDashoffset={offset}
              />
            </svg>
            {showPercentage && (
              <label className="text-base font-bold absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                {valueText}
              </label>
            )}
          </>
        );
      }}
    </ProgressBar>
  );
}
