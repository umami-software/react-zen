import type { ReactNode } from 'react';
import { Box } from './Box';
import { cn } from './lib/tailwind';
import { Row } from './Row';

interface StatusLightProps {
  color?: string;
  variant?: 'success' | 'warning' | 'error' | 'active' | 'inactive' | 'none';
  className?: string;
  children?: ReactNode;
}

const variantColors = {
  success: 'bg-green-500',
  warning: 'bg-yellow-500',
  error: 'bg-red-500',
  active: 'bg-green-500',
  inactive: 'bg-gray-400',
  none: 'bg-transparent',
};

function StatusDot({ color, variant }: { color?: string; variant: string }) {
  return (
    <Row alignItems="center" justifyContent="center" className="relative w-3 h-3">
      <Box
        borderRadius="full"
        className={cn('w-2 h-2', variantColors[variant as keyof typeof variantColors])}
        style={color ? { backgroundColor: color } : undefined}
      />
    </Row>
  );
}

function StatusLight(props: StatusLightProps) {
  const { color, variant = 'inactive', children, className, ...domProps } = props;

  return (
    <Row {...domProps} alignItems="center" gap="2" className={className}>
      <StatusDot color={color} variant={variant} />
      {children}
    </Row>
  );
}

export { StatusLight };
export type { StatusLightProps };
