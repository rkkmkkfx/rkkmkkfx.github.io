import { useState } from 'react';
import Link from 'next/link';

import { v4 as uuidv4 } from 'uuid';

import Logo from '../logo/Logo';

import styles from './Header.module.css';

const MENU_DEF = {
  home: '/',
  skills: '/skills',
  works: '/work',
  about: '/about',
};

const Header = (): JSX.Element => {
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
      <nav role="navigation" className={styles.nav}>
        {Object.entries(MENU_DEF).map(([label, url], index) => (
          <Link key={uuidv4()} href={url} passHref>
            <a
              role="link"
              tabIndex={index}
              className={styles.navLink}
              onClick={() => setIsActive(false)}
              onKeyPress={() => setIsActive(false)}
            >
              {label}
            </a>
          </Link>
        ))}
      </nav>
    </header>
  );
};

export default Header;
