import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

import Link from 'next/link';

import Logo from '../Logo';

import styles from './Footer.module.css';

const Footer: React.FC = () => (
  <footer className={styles.root}>
    <Logo />
    <nav className={styles.nav}>
      <Link href="https://github.com/rkkmkkfx">
        <a className={styles.navLink}>
          <FontAwesomeIcon icon={faGithub} />
        </a>
      </Link>
      <Link href="https://www.linkedin.com/in/rkkmkkfx/">
        <a className={styles.navLink}>
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
      </Link>
    </nav>
  </footer>
);

export default Footer;
