import { Box, type BoxProps } from './Box';
import { Dots } from './Dots';
import { Spinner } from './Spinner';
import { cn } from './lib/tailwind';

export interface LoadingProps extends BoxProps {
  size?: 'sm' | 'md' | 'lg';
  icon?: 'dots' | 'spinner';
  placement?: 'absolute' | 'center' | 'inline';
  className?: string;
}

const placementClasses = {
  absolute: 'absolute inset-0 m-auto',
  center: 'm-auto',
  inline: 'inline-flex',
};

export function Loading({
  size,
  placement = 'inline',
  icon = 'spinner',
  className,
  ...props
}: LoadingProps) {
  return (
    <Box
      {...props}
      className={cn(
        'relative flex justify-center items-center flex-1 pointer-events-none',
        placementClasses[placement],
        className,
      )}
    >
      {icon === 'dots' && <Dots size={size} />}
      {icon === 'spinner' && <Spinner size={size} />}
    </Box>
  );
}
