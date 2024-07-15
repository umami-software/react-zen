import classNames from 'classnames';
import styles from './Dots.module.css';

export interface DotsProps {
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export function Dots(props: DotsProps) {
  const { size = 'md', className, ...domProps } = props;
  return (
    <div {...domProps} className={classNames(styles.dots, styles[`size-${size}`], className)}>
      <div />
      <div />
      <div />
    </div>
  );
}

export default Dots;
