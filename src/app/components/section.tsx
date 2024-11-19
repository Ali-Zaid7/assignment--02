/* components/Hero.tsx */

import styles from "./section.module.css";

export default function Hero() {
  return (
    <section className={styles.hero}>
      <h2 className={styles.title}>Welcome to My Website!</h2>
      <p className={styles.subtitle}>This is the paragraph section.</p>~
    </section>
  );
}

