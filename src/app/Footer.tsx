import styles from './Footer.module.css';

export function Footer() {
  return (
    <footer className={styles.footer}>
      <a href="https://umami.is" target="_blank">
        Built by <b>umami</b>
      </a>
    </footer>
  );
}
