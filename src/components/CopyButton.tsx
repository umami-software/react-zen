import { useState, ReactNode, useRef } from 'react';
import { Check, Copy } from '@/components/icons';
import { Icon } from './Icon';
import { cn } from './lib/tailwind';
import './CopyButton.css';

const TIMEOUT = 2000;

interface CopyButtonProps {
  value?: string;
  timeout?: number;
  className?: string;
  children?: ReactNode;
}

function CopyButton({ value, timeout = TIMEOUT, className, children, ...props }: CopyButtonProps) {
  const [copied, setCopied] = useState(false);
  const ref = useRef(timeout);

  const handleCopy = async () => {
    if (value) {
      await navigator.clipboard.writeText(value);

      setCopied(true);

      clearTimeout(ref.current);

      ref.current = +setTimeout(() => setCopied(false), timeout);
    }
  };

  return (
    <Icon {...props} className={cn('copy-button', className)} onClick={handleCopy}>
      {copied ? <Check /> : <Copy />}
    </Icon>
  );
}

export { CopyButton };
export type { CopyButtonProps };
