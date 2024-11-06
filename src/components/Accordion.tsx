import { ReactElement, ReactNode } from 'react';
import {
  UNSTABLE_Disclosure as Disclosure,
  UNSTABLE_DisclosurePanel as DisclosurePanel,
  UNSTABLE_DisclosureGroup as DisclosureGroup,
  DisclosureProps,
  DisclosureGroupProps,
} from 'react-aria-components';
import classNames from 'classnames';
import { Button } from './Button';
import { Text } from './Text';
import { Icon } from './Icon';
import { Icons } from './Icons';
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

export function AccordionItem({ className, children, ...props }: AccordionItemProps) {
  const [trigger, panel] = children as ReactElement[];

  return (
    <Disclosure {...props} className={classNames(styles.item, className)}>
      <Button slot="trigger" className={styles.button}>
        <Text>{trigger}</Text>
        <Icon className={styles.icon} size="xs">
          <Icons.Chevron />
        </Icon>
      </Button>
      <DisclosurePanel className={styles.panel}>{panel}</DisclosurePanel>
    </Disclosure>
  );
}
