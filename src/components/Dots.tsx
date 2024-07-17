import classNames from 'classnames';
import styles from './Dots.module.css';

interface DotsProps {
  className?: string;
}

function Dots({ className, ...props }: DotsProps) {
  return (
    <div {...props} className={classNames(styles.dots, className)}>
      <div className={styles.dot} />
      <div className={styles.dot} />
      <div className={styles.dot} />
    </div>
  );
}

export { Dots };
export type { DotsProps };

export default Dots;
