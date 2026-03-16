import { useCallback, useEffect, useState } from 'react';
import { debounce } from '@/lib/utils';

// Tailwind 4 default breakpoints (min-width values)
const breakpoints = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  '2xl': 1536,
};

export type BreakpointKey = 'base' | keyof typeof breakpoints;

const DEBOUNCE_DELAY_MS = 150;

export function useBreakpoint() {
  const [breakpoint, setBreakpoint] = useState<BreakpointKey | null>(null);

  const calculateBreakpoint = useCallback(() => {
    if (typeof window === 'undefined') {
      return;
    }

    const width = window.innerWidth;

    // Find the largest breakpoint that the current width satisfies (mobile-first)
    let currentBreakpoint: BreakpointKey = 'base';
    for (const [key, minWidth] of Object.entries(breakpoints)) {
      if (width >= minWidth) {
        currentBreakpoint = key as BreakpointKey;
      }
    }

    setBreakpoint(currentBreakpoint);
  }, []);

  useEffect(() => {
    calculateBreakpoint();

    const debouncedResize = debounce(calculateBreakpoint, DEBOUNCE_DELAY_MS);

    window.addEventListener('resize', debouncedResize);

    return () => {
      window.removeEventListener('resize', debouncedResize);
    };
  }, [calculateBreakpoint]);

  return breakpoint;
}
