'use client';

import { type ComponentProps, useRef } from 'react';
import { Box, CopyButton } from '@/components';

export function Pre({ children, ...props }: ComponentProps<'pre'>) {
  const preRef = useRef<HTMLPreElement>(null);

  const getCodeText = () => {
    return preRef.current?.textContent || '';
  };

  return (
    <Box
      position="relative"
      border
      borderRadius="lg"
      overflow="hidden"
      backgroundColor="surface-base"
      padding="4"
      className="group"
    >
      <Box
        position="absolute"
        className="top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity z-10"
      >
        <CopyButton value={getCodeText} className="bg-surface-overlay/80 backdrop-blur-sm" />
      </Box>
      <pre
        ref={preRef}
        {...props}
        className={`${props.className || ''} !border-0 !rounded-none !m-0 !p-0`}
      >
        {children}
      </pre>
    </Box>
  );
}
