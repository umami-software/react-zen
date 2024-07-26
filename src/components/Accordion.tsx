import { ReactNode } from 'react';
import {
  Root,
  Header,
  Item,
  Trigger,
  Content,
  AccordionItemProps,
  AccordionContentProps,
  AccordionHeaderProps,
} from '@radix-ui/react-accordion';
import classNames from 'classnames';
import { Icon } from './Icon';
import { Icons } from './Icons';
import styles from './Accordion.module.css';

interface AccordionProps {
  type: 'single' | 'multiple';
  className?: string;
  children?: ReactNode;
}

function Accordion({ className, children, ...props }: AccordionProps) {
  return (
    <Root {...props} className={classNames(styles.accordion, className)}>
      {children}
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

function AccordionHeader({ children, className, ...props }: AccordionHeaderProps) {
  return (
    <Header {...props} className={classNames(styles.header, className)}>
      <Trigger className={styles.trigger}>
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

export { Accordion, AccordionItem, AccordionHeader, AccordionContent };
