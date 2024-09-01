import { useState, ReactNode, HTMLAttributes, useRef } from 'react';
import classNames from 'classnames';
import { Icon } from './Icon';
import { Icons } from './Icons';
import styles from './CopyButton.module.css';

const TIMEOUT = 2000;

interface CopyButtonProps extends HTMLAttributes<HTMLDivElement> {
  value?: string;
  className?: string;
  children?: ReactNode;
}

function CopyButton({ value, className, children, ...props }: CopyButtonProps) {
  const [copied, setCopied] = useState(false);
  const timeout = useRef(0);

  const handleCopy = async () => {
    if (value) {
      await navigator.clipboard.writeText(value);

      setCopied(true);

      clearTimeout(timeout.current);

      timeout.current = +setTimeout(() => setCopied(false), TIMEOUT);
    }
  };

  return (
    <Icon {...props} className={classNames(styles.icon, className)} onClick={handleCopy}>
      {copied ? <Icons.Check /> : <Icons.Copy />}
    </Icon>
  );
}

export { CopyButton };
export type { CopyButtonProps };
