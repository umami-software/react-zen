import { Label as AriaLabel, type LabelProps as AriaLabelProps } from 'react-aria-components';
import { cn } from './lib/tailwind';

interface LabelProps extends AriaLabelProps {
  className?: string;
}

function Label({ className, ...props }: LabelProps) {
  return <AriaLabel {...props} className={cn('text-base font-bold leading-10', className)} />;
}

export { Label };
export type { LabelProps };
