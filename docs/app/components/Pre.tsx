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
      backgroundColor="surface-base"
      className="group overflow-x-auto"
      marginY="6"
    >
      <Box
        position="absolute"
        className="top-4 right-4 opacity-20 group-hover:opacity-100 transition-opacity z-10"
      >
        <CopyButton value={getCodeText} className="bg-surface-overlay/80 backdrop-blur-sm" />
      </Box>
      <pre
        ref={preRef}
        {...props}
        className={`${props.className || ''} !border-0 !rounded-none !m-0 p-4 overflow-x-auto max-w-full`}
      >
        {children}
      </pre>
    </Box>
  );
}
