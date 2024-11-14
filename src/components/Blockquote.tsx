import { HTMLAttributes } from 'react';
import { FontWeight, Responsive, TextWrap } from '@/lib/types';
import { Slot } from './Slot';
import styles from './Blockquote.module.css';

export interface BlockquoteProps extends HTMLAttributes<HTMLElement> {
  asChild?: boolean;
  weight?: Responsive<FontWeight>;
  wrap?: Responsive<TextWrap>;
}

export function Blockquote({ asChild, children }: BlockquoteProps) {
  const Component = asChild ? Slot : 'blockquote';

  return <Component className={styles.blockquote}>{children}</Component>;
}
