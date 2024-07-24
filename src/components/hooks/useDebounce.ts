import { useState, useEffect } from 'react';

function useDebounce(value: string, delay: number) {
  const [debouncedValue, setValue] = useState(value);

  useEffect(() => {
    const timer = setTimeout(() => {
      setValue(value);
    }, delay);

    return () => {
      clearTimeout(timer);
    };
  }, [value, delay]);

  return debouncedValue;
}

export { useDebounce };
