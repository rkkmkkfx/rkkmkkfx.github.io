import React, { useState } from 'react';
import Link from 'next/link';

import styles from './Header.module.css';
import Logo from '../Logo';

const Header = () => {
  const [isActive, setIsActive] = useState(false);
  return (
    <header className={styles.root}>
      <Logo />
      <button
        type="button"
        className={`${styles.toggler}${isActive ? ` ${styles.active}` : ''}`}
        aria-label="Toggle"
        onClick={() => {
          setIsActive(!isActive);
        }}
      >
        <span />
        <span />
        <span />
      </button>
      <nav className={styles.nav}>
        <Link href="/"><a onClick={() => setIsActive(false)} className={styles.navLink}>Home</a></Link>
        <Link href="/skills"><a onClick={() => setIsActive(false)} className={styles.navLink}>Skills</a></Link>
        <Link href="/work"><a onClick={() => setIsActive(false)} className={styles.navLink}>Work</a></Link>
        <Link href="/about"><a onClick={() => setIsActive(false)} className={styles.navLink}>About</a></Link>
      </nav>
    </header>
  );
};

export default Header;
