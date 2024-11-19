import styles from "./Header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <h1 className={styles.logo}>My Website</h1>
      <nav className={styles.nav}>
        <nav>Home</nav>
        <nav>About</nav>
        <nav>Contact Us</nav>
      </nav>
    </header>
  );
}

  