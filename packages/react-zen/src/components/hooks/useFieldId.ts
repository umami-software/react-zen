import { useId } from 'react';

export function useFieldId(id?: string) {
  const generatedId = useId();

  return id ?? generatedId;
}
