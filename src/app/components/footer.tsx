
// module.css refers to CSS Modules, a popular CSS feature used in modern
//  JavaScript frameworks like React, Next.js, and others. CSS Modules allow 
//  for scoped CSS—meaning that styles are automatically scoped locally to
//   the component they are imported in, preventing style conflicts and making
//    it easier to maintain CSS in larger projects.

import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <p>Footer</p>
    </footer>
  );
}
