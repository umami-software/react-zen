import { Label, LabelProps } from 'react-aria-components';
import { Slot } from '@radix-ui/react-slot';
import classNames from 'classnames';
import styles from './Label.module.css';

interface _LabelProps extends LabelProps {
  asChild?: boolean;
}

function _Label({ asChild, className, ...props }: _LabelProps) {
  const Component: any = asChild ? Slot : 'div';

  return <Component {...props} className={classNames(styles.label, className)} />;
}

export { _Label as Label };
export type { _LabelProps as LabelProps };

export default _Label;
