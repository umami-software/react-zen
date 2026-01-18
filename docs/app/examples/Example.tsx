'use client';

import { Children, isValidElement, type ReactNode, useState } from 'react';
import { Box, Button, Column, Flexbox, type FlexboxProps } from '@/components';

function isCodeBlock(child: ReactNode): boolean {
  if (!isValidElement(child)) return false;

  const type = child.type as any;

  // Check for pre element
  if (type === 'pre') return true;

  // Check for component name containing 'Code' or 'Pre'
  const name = type.displayName || type.name || '';
  if (name.includes('Code') || name.includes('Pre')) return true;

  // Check if it has a 'data-rehype-pretty-code-figure' or similar attribute
  if (child.props?.['data-rehype-pretty-code-figure'] !== undefined) return true;

  // Check for figure element (nextra wraps code in figure)
  if (type === 'figure') return true;

  // Check className for code-related classes
  const className = child.props?.className || '';
  if (className.includes('code') || className.includes('highlight')) return true;

  return false;
}

function separateChildren(children: ReactNode): { preview: ReactNode[]; code: ReactNode | null } {
  const preview: ReactNode[] = [];
  let code: ReactNode | null = null;

  Children.forEach(children, child => {
    if (isCodeBlock(child)) {
      code = child;
    } else {
      preview.push(child);
    }
  });

  return { preview, code };
}

export function Example({
  direction = 'column',
  alignItems = 'center',
  justifyContent = 'center',
  gap = '3',
  padding = '8',
  marginY = '6',
  border = true,
  borderRadius = 'lg',
  minHeight = '300px',
  wrap = 'wrap',
  position = 'relative',
  overflow = 'hidden',
  backgroundColor = 'surface-base',
  children,
  ...props
}: FlexboxProps) {
  const [showCode, setShowCode] = useState(false);
  const { preview, code } = separateChildren(children);

  return (
    <Box marginY="6" border borderRadius={borderRadius} overflow="hidden">
      <Flexbox
        {...props}
        {...{
          direction,
          alignItems,
          justifyContent,
          gap,
          padding,
          minHeight,
          wrap,
          position,
          overflow,
          backgroundColor,
        }}
      >
        {preview}
        {code && (
          <Box position="absolute" className="bottom-2 right-2">
            <Button size="xs" onPress={() => setShowCode(!showCode)}>
              {showCode ? 'Hide code' : 'Show code'}
            </Button>
          </Box>
        )}
      </Flexbox>
      {showCode && code && (
        <Box
          backgroundColor="surface-sunken"
          overflow="auto"
          className="bg-surface-base border-t border-edge [&_*]:border-0 [&_*]:ring-0 [&_pre]:m-0 [&_pre]:p-4 [&_pre]:bg-transparent [&_pre]:rounded-none [&_pre]:text-sm [&_figure]:m-0 [&_figure]:p-0 [&_figure]:bg-transparent [&_code]:font-[family-name:var(--font-family-mono)]"
        >
          {code}
        </Box>
      )}
    </Box>
  );
}
