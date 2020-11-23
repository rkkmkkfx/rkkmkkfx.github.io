import React from 'react';
import Logo from '../Logo';

import styles from './Footer.module.css';

const Footer: React.FC = () => (
  <footer className={styles.root}>
    <Logo />
  </footer>
);

export default Footer;
