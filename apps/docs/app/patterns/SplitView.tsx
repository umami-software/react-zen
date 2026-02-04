'use client';

import { createContext, type ReactNode, useContext, useState } from 'react';
import { Box, type BoxProps, Row } from '@/components';

interface SplitViewContextValue {
  selectedId: string | null;
  setSelectedId: (id: string | null) => void;
}

const SplitViewContext = createContext<SplitViewContextValue>({
  selectedId: null,
  setSelectedId: () => {},
});

export function useSplitView() {
  return useContext(SplitViewContext);
}

interface SplitViewProps extends BoxProps {
  defaultSelectedId?: string | null;
  children: ReactNode;
}

export function SplitView({ defaultSelectedId = null, children, ...props }: SplitViewProps) {
  const [selectedId, setSelectedId] = useState<string | null>(defaultSelectedId);

  return (
    <SplitViewContext.Provider value={{ selectedId, setSelectedId }}>
      <Row height="100%" {...props}>
        {children}
      </Row>
    </SplitViewContext.Provider>
  );
}

interface SplitViewListProps extends BoxProps {
  width?: string;
  children: ReactNode;
}

export function SplitViewList({ width = '20rem', children, ...props }: SplitViewListProps) {
  return (
    <Box
      width={width}
      height="100%"
      borderColor="muted"
      border="right"
      overflow="auto"
      flexShrink="0"
      {...props}
    >
      {children}
    </Box>
  );
}

interface SplitViewItemProps extends BoxProps {
  id: string;
  children: ReactNode;
}

export function SplitViewItem({ id, children, ...props }: SplitViewItemProps) {
  const { selectedId, setSelectedId } = useSplitView();
  const isSelected = selectedId === id;

  return (
    <Box
      padding="3"
      borderColor="muted"
      border="bottom"
      backgroundColor={isSelected ? 'interactive' : undefined}
      className={`cursor-pointer ${!isSelected ? 'hover:bg-interactive' : ''}`}
      onClick={() => setSelectedId(id)}
      {...props}
    >
      {children}
    </Box>
  );
}

interface SplitViewDetailProps extends BoxProps {
  children: ReactNode;
  emptyState?: ReactNode;
}

export function SplitViewDetail({ children, emptyState, ...props }: SplitViewDetailProps) {
  const { selectedId } = useSplitView();

  return (
    <Box flexGrow="1" height="100%" overflow="auto" {...props}>
      {selectedId ? children : emptyState}
    </Box>
  );
}
