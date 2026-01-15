import { HTMLAttributes } from 'react';
import { Row } from './Row';
import { Box } from './Box';
import { cn } from './lib/tailwind';
import './Dots.css';

export interface DotsProps extends HTMLAttributes<HTMLDivElement> {
  size?: 'sm' | 'md' | 'lg';
}

const sizeMap = {
  sm: 'w-1.5 h-1.5',
  md: 'w-2 h-2',
  lg: 'w-3 h-3',
};

function Dot({ size }: { size: 'sm' | 'md' | 'lg' }) {
  return <Box className={cn('dot', sizeMap[size])} />;
}

const gapMap = {
  sm: '1',
  md: '1.5',
  lg: '2',
} as const;

export function Dots({ size = 'md', className, color: _color, ...props }: DotsProps) {
  return (
    <Row {...props} alignItems="center" gap={gapMap[size]} className={className}>
      <Dot size={size} />
      <Dot size={size} />
      <Dot size={size} />
    </Row>
  );
}
