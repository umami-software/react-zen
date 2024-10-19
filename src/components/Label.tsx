import { Label as AriaLabel, LabelProps as AriaLabelProps } from 'react-aria-components';
import classNames from 'classnames';
import styles from './Label.module.css';

interface LabelProps extends AriaLabelProps {
  className?: string;
}

function Label({ className, ...props }: LabelProps) {
  return <AriaLabel {...props} className={classNames(styles.label, className)} />;
}

export { Label };
export type { LabelProps };
