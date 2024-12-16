import { cloneElement, isValidElement, ReactElement, ReactNode } from 'react';

export function Slot({
  children,
  ...props
}: {
  children: ReactElement | ReactNode;
  [key: string]: any;
}) {
  if (!isValidElement(children)) {
    return null;
  }

  return cloneElement(children, { ...props });
}
