import { useRef, useState } from 'react';
import { Check, Copy } from '@/components/icons';
import { Button, type ButtonProps } from './Button';
import { Icon } from './Icon';
import { cn } from './lib/tailwind';

const TIMEOUT = 2000;

export interface CopyButtonProps
  extends Omit<
    ButtonProps,
    'children' | 'onClick' | 'onPress' | 'size' | 'type' | 'value' | 'variant'
  > {
  value?: string | (() => string);
  timeout?: number;
}

export function CopyButton({ value, timeout = TIMEOUT, className, ...props }: CopyButtonProps) {
  const [copied, setCopied] = useState(false);
  const ref = useRef(timeout);

  const handleCopy = async () => {
    const text = typeof value === 'function' ? value() : value;
    if (text) {
      await navigator.clipboard.writeText(text);

      setCopied(true);

      clearTimeout(ref.current);

      ref.current = +setTimeout(() => setCopied(false), timeout);
    }
  };

  return (
    <Button
      {...props}
      type="button"
      variant="quiet"
      size="xs"
      aria-label={props['aria-label'] ?? 'Copy'}
      className={cn('size-6 shrink-0 p-0', className)}
      onClick={handleCopy}
    >
      <Icon className="animate-icon-pop">{copied ? <Check /> : <Copy />}</Icon>
    </Button>
  );
}
