import React from 'react';

import styles from './styles.scss';

export default function Navbar() {
  return (
    <nav className={styles.nav}>
      <a>
        Frontile
      </a>
      <ul className={styles.links}>
        <li className={styles.link}>
          <a href="/home">Home</a>
        </li>
        <li className={styles.link}>
          <a href="/cap">Talks</a>
        </li>
        <li className={styles.link}>
          <a href="/dev">Department</a>
        </li>
      </ul>
    </nav>
  );
}
