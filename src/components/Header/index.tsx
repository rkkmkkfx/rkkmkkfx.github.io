import React from 'react';
import Link from 'next/link';

import styles from './Header.module.css';

const Header = () => (
  <header className={styles.root}>
    <div className="logo">rkkmkkfx.dev</div>
    <nav>
      <Link href='/'><a className={styles.navLink}>Home</a></Link>
      <Link href='/techs'><a className={styles.navLink}>Techs</a></Link>
      <Link href='/about'><a className={styles.navLink}>About</a></Link>
    </nav>
  </header>
);

export default Header;
