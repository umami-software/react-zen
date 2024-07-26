import { ReactNode } from 'react';
import {
  Root,
  Header,
  Item,
  Trigger,
  Content,
  AccordionItemProps,
  AccordionTriggerProps,
  AccordionContentProps,
  AccordionHeaderProps,
} from '@radix-ui/react-accordion';
import classNames from 'classnames';
import { Icon } from './Icon';
import { Icons } from './Icons';
import styles from './Accordion.module.css';

interface AccordionProps {
  type: 'single' | 'multiple';
  items: any[];
  className?: string;
  children?: ReactNode;
}

function Accordion({ items, className, children, ...props }: AccordionProps) {
  return (
    <Root {...props} className={classNames(styles.accordion, className)}>
      {!children &&
        items.length > 0 &&
        items.map((item, index) => {
          return <AccordionItem value={item.value}></AccordionItem>;
        })}
      {!items && children}
    </Root>
  );
}

function AccordionItem({ className, children, ...props }: AccordionItemProps) {
  return (
    <Item {...props} className={classNames(styles.item, className)}>
      {children}
    </Item>
  );
}

function AccordionTrigger({ children, className, ...props }: AccordionTriggerProps) {
  return (
    <Header className={classNames(styles.header, className)}>
      <Trigger {...props} className={styles.trigger}>
        {children}
        <Icon className={styles.icon} size="sm">
          <Icons.Chevron />
        </Icon>
      </Trigger>
    </Header>
  );
}

function AccordionContent({ children, className, ...props }: AccordionContentProps) {
  return (
    <Content {...props} className={classNames(styles.content, className)}>
      {children}
    </Content>
  );
}

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent };
