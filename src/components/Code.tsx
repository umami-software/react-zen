import { HTMLAttributes } from 'react';
import { FontWeight, Responsive, TextWrap } from '@/lib/types';
import { Slot } from './Slot';
import styles from './Code.module.css';

export interface CodeProps extends HTMLAttributes<HTMLElement> {
  asChild?: boolean;
  weight?: Responsive<FontWeight>;
  wrap?: Responsive<TextWrap>;
}

export function Code({ asChild, children }: CodeProps) {
  const Component = asChild ? Slot : 'code';

  return <Component className={styles.code}>{children}</Component>;
}
