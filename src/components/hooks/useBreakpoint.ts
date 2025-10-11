import { useState, useEffect, useCallback } from 'react';
import { debounce } from '@/lib/utils';

const breakpoints = {
  xs: [0, 576],
  sm: [576, 768],
  md: [768, 992],
  lg: [992, 1200],
  xl: [1200, Infinity],
};

export type BreakpointKey = keyof typeof breakpoints;

const DEBOUNCE_DELAY_MS = 150;

export function useBreakpoint() {
  const [breakpoint, setBreakpoint] = useState<BreakpointKey | null>(null);

  const calculateBreakpoint = useCallback(() => {
    if (typeof window === 'undefined') {
      return;
    }

    const width = window.innerWidth;

    const currentBreakpointKey =
      (Object.keys(breakpoints).find(key => {
        const [min, max] = breakpoints[key as BreakpointKey];
        return width >= min && width < max;
      }) as BreakpointKey | undefined) || 'xs';

    setBreakpoint(currentBreakpointKey);
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
