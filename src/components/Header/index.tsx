import React from 'react';
import Link from 'next/link';

import styles from './Header.module.css';

const Header = () => (
  <header className={styles.root}>
    <div className={styles.logo}>
      <img src="static/img/logo.svg" alt="" />
      rkkmkkfx.dev
    </div>
    <nav>
      <Link href="/"><a className={styles.navLink}>Home</a></Link>
      <Link href="/skills"><a className={styles.navLink}>Skills</a></Link>
      <Link href="/work"><a className={styles.navLink}>Work</a></Link>
      <Link href="/about"><a className={styles.navLink}>About</a></Link>
    </nav>
  </header>
);

export default Header;
