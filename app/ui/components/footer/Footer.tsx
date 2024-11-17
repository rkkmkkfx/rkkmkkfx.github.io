import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

import Link from 'next/link';

import Logo from '../logo/Logo';

import styles from './Footer.module.css';
import { ReactElement } from 'react';

export default function Footer(): ReactElement {
  return (
    <footer className={styles.root}>
      <Logo />
      <nav className={styles.nav}>
        <Link href="https://facebook.com/rkkmkkfx" className={styles.navLink}>
          <FontAwesomeIcon icon={faFacebook} size="xs" />
        </Link>
        <Link href="https://github.com/rkkmkkfx" className={styles.navLink}>
          <FontAwesomeIcon icon={faGithub} size="xs" />
        </Link>
        <Link href="https://linkedin.com/in/rkkmkkfx/" className={styles.navLink}>
          <FontAwesomeIcon icon={faLinkedin} size="xs" />
        </Link>
      </nav>
    </footer>
  );
}
