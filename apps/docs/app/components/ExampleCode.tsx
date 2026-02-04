'use client';
import type { ReactNode } from 'react';
import { Box } from '@/components';

interface ExampleCodeProps {
  children: ReactNode;
}

export function ExampleCode({ children }: ExampleCodeProps) {
  return (
    <Box
      position="relative"
      overflow="auto"
      backgroundColor="surface-base"
      className="[&>*]:!m-0 [&_*]:border-0 [&_*]:ring-0 [&_pre]:!m-0 [&_pre]:p-4 [&_pre]:text-sm [&_figure]:!m-0 [&_figure]:!p-0 [&_div]:!m-0 [&_code]:font-[family-name:var(--font-family-mono)]"
    >
      {children}
    </Box>
  );
}
