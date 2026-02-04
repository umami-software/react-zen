import type { ReactElement, ReactNode } from 'react';
import {
  Disclosure,
  DisclosureGroup,
  type DisclosureGroupProps,
  DisclosurePanel,
  type DisclosureProps,
} from 'react-aria-components';
import { ChevronRight } from '@/components/icons';
import { Button } from './Button';
import { Icon } from './Icon';
import { cn } from './lib/tailwind';
import { Text } from './Text';

export interface AccordionProps extends DisclosureGroupProps {
  type?: 'single' | 'multiple';
  className?: string;
  children?: ReactNode;
}

export interface AccordionItemProps extends DisclosureProps {}

export function Accordion({ className, children, ...props }: AccordionProps) {
  return (
    <DisclosureGroup
      {...props}
      className={cn('flex flex-col items-start w-full gap-2 text-base', className)}
    >
      {children}
    </DisclosureGroup>
  );
}

export function AccordionItem({ className, children, ...props }: AccordionItemProps) {
  const [trigger, panel] = children as ReactElement[];

  return (
    <Disclosure {...props} className={cn('w-full cursor-pointer group', className)}>
      {({ isExpanded }) => (
        <>
          <Button
            slot="trigger"
            variant="zero"
            className="w-full justify-between font-bold py-2 px-0"
          >
            <Text>{trigger}</Text>
            <Icon
              className={cn('transition-transform duration-200', isExpanded && 'rotate-90')}
              size="sm"
            >
              <ChevronRight />
            </Icon>
          </Button>
          <DisclosurePanel
            className={cn(
              'overflow-hidden transition-all duration-300 ease-out',
              isExpanded ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0',
            )}
          >
            {panel}
          </DisclosurePanel>
        </>
      )}
    </Disclosure>
  );
}
