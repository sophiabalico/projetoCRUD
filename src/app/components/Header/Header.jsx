import Link from "next/link";
import styles from "./Header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <h1 className={styles.title}>Tripass ✈️</h1>
      <nav className={styles.nav}>
        <ul className={styles.navList}>
          <li className={styles.navItem}>
            <Link href="/" className={styles.navLink}>
              Home
            </Link>
          </li>
          <li className={styles.navItem}>
            <Link href="/appinfo" className={styles.navLink}>
              Sobre a API
            </Link>
          </li>
          <li className={styles.navItem}>
            <Link href="/entidade" className={styles.navLink}>
              Países
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}