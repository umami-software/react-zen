import { Box } from '@/components';
import type { BoxProps } from '@/components/Box';

const SIZES = {
  sm: '25px',
  md: '50px',
  lg: '150px',
};

export function ExampleBox({
  size = 'md',
  width,
  height,
  border = true,
  rounded = true,
  color,
  ...props
}: { size?: keyof typeof SIZES } & BoxProps) {
  return (
    <Box
      {...props}
      width={width || SIZES[size]}
      height={height || SIZES[size]}
      rounded={rounded}
      border={border}
    />
  );
}
