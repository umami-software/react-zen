import { type ReactElement, type ReactNode, useState } from 'react';
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
  type: 'single' | 'multiple';
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

export function AccordionItem({
  defaultExpanded,
  className,
  children,
  ...props
}: AccordionItemProps) {
  const [trigger, panel] = children as ReactElement[];
  const [expanded, setExpanded] = useState(defaultExpanded);

  const handleExpandedChange = (isExpanded: boolean) => {
    requestAnimationFrame(() => setExpanded(isExpanded));
  };

  return (
    <Disclosure
      {...props}
      className={cn('w-full cursor-pointer', className)}
      onExpandedChange={handleExpandedChange}
    >
      <Button
        slot="trigger"
        variant="zero"
        className="w-full justify-between font-bold py-2 px-0"
      >
        <Text>{trigger}</Text>
        <Icon className="transition-transform duration-200 [[data-expanded]_&]:rotate-90" size="sm">
          <ChevronRight />
        </Icon>
      </Button>
      <DisclosurePanel
        className={cn(
          'overflow-hidden max-h-0 transition-[max-height] duration-500 ease-out',
          expanded && 'max-h-[500px]',
        )}
      >
        {panel}
      </DisclosurePanel>
    </Disclosure>
  );
}
