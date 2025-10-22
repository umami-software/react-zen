import { ReactElement, ReactNode, useState } from 'react';
import {
  Disclosure,
  DisclosurePanel,
  DisclosureGroup,
  DisclosureProps,
  DisclosureGroupProps,
} from 'react-aria-components';
import classNames from 'classnames';
import { ChevronDown } from '@/components/icons';
import { Button } from './Button';
import { Text } from './Text';
import { Icon } from './Icon';
import styles from './Accordion.module.css';

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
        <Icon className={styles.icon} size="xs">
          <ChevronDown />
        </Icon>
      </Button>
      <DisclosurePanel className={classNames(styles.panel, expanded && styles.expanded)}>
        {panel}
      </DisclosurePanel>
    </Disclosure>
  );
}
