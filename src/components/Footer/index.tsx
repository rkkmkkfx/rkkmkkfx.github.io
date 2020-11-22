import React from 'react';

import styles from './Footer.module.css';

const Footer: React.FC = () => (
  <footer className={styles.root}>
    <div className={styles.logo}>
      <img src="static/img/logo.svg" alt="" />
      rkkmkkfx.dev
    </div>
  </footer>
);

export default Footer;
