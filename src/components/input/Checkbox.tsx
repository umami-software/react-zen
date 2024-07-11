import * as Checkbox from '@radix-ui/react-checkbox';
import styles from './Checkbox.module.css';

export default () => (
  <Checkbox.Root className={styles.checkbox}>
    <Checkbox.Indicator />
  </Checkbox.Root>
);
