import { Label, LabelProps } from 'react-aria-components';
import classNames from 'classnames';
import styles from './Label.module.css';

interface _LabelProps extends LabelProps {
  asChild?: boolean;
}

function _Label({ asChild, className, ...props }: _LabelProps) {
  return <Label {...props} className={classNames(styles.label, className)} />;
}

export { _Label as Label };
export type { _LabelProps as LabelProps };

export default _Label;
