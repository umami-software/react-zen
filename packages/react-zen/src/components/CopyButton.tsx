import { type ReactNode, useRef, useState } from 'react';
import { Check, Copy } from '@/components/icons';
import { Icon } from './Icon';
import { cn } from './lib/tailwind';

const TIMEOUT = 2000;

export interface CopyButtonProps {
  value?: string | (() => string);
  timeout?: number;
  className?: string;
  children?: ReactNode;
}

export function CopyButton({
  value,
  timeout = TIMEOUT,
  className,
  children,
  ...props
}: CopyButtonProps) {
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
    <Icon {...props} className={cn('animate-icon-pop', className)} onClick={handleCopy}>
      {copied ? <Check /> : <Copy />}
    </Icon>
  );
}
