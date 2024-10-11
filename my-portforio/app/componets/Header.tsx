// components/Header.js
import Link from 'next/link';
import styles from './Header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>ykusano</div>
      <nav className={styles.nav}>
        <Link href="/" className={styles.navLink}>
          home
        </Link>
        <Link href="/about" className={styles.navLink}>
          about
        </Link>
        <Link href="/work" className={styles.navLink}>
          work
        </Link>
      </nav>
    </header>
  );
};

export default Header;