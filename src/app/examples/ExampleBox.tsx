import { Box } from '@/components';
import { BoxProps } from '@/components/Box';

const SIZES = {
  sm: '25px',
  md: '50px',
  lg: '150px',
};

export function ExampleBox({
  size = 'md',
  borderRadius = '2',
  color,
  ...props
}: { size?: keyof typeof SIZES } & BoxProps) {
  return <Box {...props} width={SIZES[size]} height={SIZES[size]} borderRadius={borderRadius} />;
}
