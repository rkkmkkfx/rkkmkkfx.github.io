import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

import Link from 'next/link';

import Logo from '../logo/Logo';

import styles from './Footer.module.css';

const Footer = (): JSX.Element => (
  <footer className={styles.root}>
    <Logo />
    <nav className={styles.nav}>
      <Link href="https://github.com/rkkmkkfx" className={styles.navLink}>
        <FontAwesomeIcon icon={faGithub} />
      </Link>
      <Link href="https://www.linkedin.com/in/rkkmkkfx/" className={styles.navLink}>
        <FontAwesomeIcon icon={faLinkedin} />
      </Link>
    </nav>
  </footer>
);

export default Footer;
