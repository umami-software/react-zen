import classNames from 'classnames';
import { type ReactElement, type ReactNode, useState } from 'react';
import {
  Disclosure,
  DisclosureGroup,
  type DisclosureGroupProps,
  DisclosurePanel,
  type DisclosureProps,
} from 'react-aria-components';
import { ChevronRight } from '@/components/icons';
import styles from './Accordion.module.css';
import { Button } from './Button';
import { Icon } from './Icon';
import { Text } from './Text';

export interface AccordionProps extends DisclosureGroupProps {
  type: 'single' | 'multiple';
  className?: string;
  children?: ReactNode;
}

export interface AccordionItemProps extends DisclosureProps {}

export function Accordion({ className, children, ...props }: AccordionProps) {
  return (
    <DisclosureGroup {...props} className={classNames(styles.accordion, className)}>
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
      className={classNames(styles.item, className)}
      onExpandedChange={handleExpandedChange}
    >
      <Button slot="trigger" className={styles.button}>
        <Text>{trigger}</Text>
        <Icon className={styles.icon} size="sm">
          <ChevronRight />
        </Icon>
      </Button>
      <DisclosurePanel className={classNames(styles.panel, expanded && styles.expanded)}>
        {panel}
      </DisclosurePanel>
    </Disclosure>
  );
}
