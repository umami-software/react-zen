'use client';
import { useState, useRef } from 'react';
import { Icon } from './Icon';
import { Icons } from './Icons';
import styles from './CodeBlock.module.css';

export function CodeBlock(props: any) {
  const textInput = useRef<any>(null);
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    setCopied(true);

    navigator?.clipboard?.writeText(textInput?.current?.textContent);

    setTimeout(() => {
      setCopied(false);
    }, 1000);
  };

  return (
    <pre ref={textInput} className={styles.container}>
      {props.children}
      <button aria-label="Copy code" className={styles.button} onClick={handleCopy}>
        <Icon size="sm">
          {copied ? (
            <Icons.Check className={styles.check} />
          ) : (
            <Icons.Copy className={styles.copy} />
          )}
        </Icon>
      </button>
    </pre>
  );
}
