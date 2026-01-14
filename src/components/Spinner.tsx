import { HTMLAttributes } from 'react';
import { Box } from './Box';
import { cn } from './lib/tailwind';

export interface SpinnerProps extends HTMLAttributes<HTMLDivElement> {
  size?: 'sm' | 'md' | 'lg';
  quiet?: boolean;
  isDisabled?: boolean;
}

const sizeMap = {
  sm: 'w-4 h-4',
  md: 'w-6 h-6',
  lg: 'w-8 h-8',
};

export function Spinner(props: SpinnerProps) {
  const { size = 'md', quiet, className, isDisabled, color: _color, ...domProps } = props;
  return (
    <Box
      {...domProps}
      className={cn(
        'animate-spin',
        sizeMap[size],
        quiet && 'opacity-50',
        isDisabled && 'opacity-30',
        className,
      )}
    >
      <svg viewBox="25 25 50 50" className="w-full h-full">
        <circle
          className="stroke-gray-200 dark:stroke-gray-700 fill-none"
          cx="50"
          cy="50"
          r="20"
          strokeWidth="4"
        />
        <circle
          className="stroke-gray-600 dark:stroke-gray-300 fill-none"
          cx="50"
          cy="50"
          r="20"
          strokeWidth="4"
          strokeDasharray="1, 200"
          strokeDashoffset="0"
          strokeLinecap="round"
        />
      </svg>
    </Box>
  );
}
