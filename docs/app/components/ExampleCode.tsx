'use client';
import { type ReactNode, useRef } from 'react';
import { Box, CopyButton } from '@/components';

interface ExampleCodeProps {
  children: ReactNode;
}

export function ExampleCode({ children }: ExampleCodeProps) {
  const codeRef = useRef<HTMLDivElement>(null);

  const getCodeText = () => {
    const codeElement = codeRef.current?.querySelector('code');
    return codeElement?.textContent || '';
  };

  return (
    <Box
      ref={codeRef}
      position="relative"
      overflow="auto"
      backgroundColor="surface-base"
      paddingRight="10"
      className="group [&>*]:!m-0 [&_*]:border-0 [&_*]:ring-0 [&_pre]:!m-0 [&_pre]:p-4 [&_pre]:text-sm [&_figure]:!m-0 [&_figure]:!p-0 [&_div]:!m-0 [&_code]:font-[family-name:var(--font-family-mono)]"
    >
      <Box position="absolute" className="top-4 right-3 z-10">
        <CopyButton value={getCodeText} className="bg-surface-overlay/80 backdrop-blur-sm" />
      </Box>
      {children}
    </Box>
  );
}
