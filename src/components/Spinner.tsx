import { HTMLAttributes } from 'react';
import { Box } from './Box';
import { cn } from './lib/tailwind';
import './Spinner.css';

export interface SpinnerProps extends HTMLAttributes<HTMLDivElement> {
  size?: 'sm' | 'md' | 'lg';
  quiet?: boolean;
  isDisabled?: boolean;
}

const sizeMap = {
  sm: 'w-4 h-4',
  md: 'w-7 h-7',
  lg: 'w-12 h-12',
};

export function Spinner(props: SpinnerProps) {
  const { size = 'md', quiet, className, isDisabled, color: _color, ...domProps } = props;
  return (
    <Box
      {...domProps}
      className={cn(
        'relative inline-flex justify-center items-center',
        sizeMap[size],
        className,
      )}
    >
      <svg
        viewBox="25 25 50 50"
        className="spinner-svg w-full h-full"
      >
        {!quiet && (
          <circle
            className="spinner-track stroke-gray-300 dark:stroke-gray-600"
            cx="50"
            cy="50"
            r="20"
          />
        )}
        <circle
          className={cn(
            'spinner-fill',
            isDisabled
              ? 'stroke-gray-400 dark:stroke-gray-500'
              : 'stroke-gray-900 dark:stroke-gray-100',
          )}
          cx="50"
          cy="50"
          r="20"
        />
      </svg>
    </Box>
  );
}
