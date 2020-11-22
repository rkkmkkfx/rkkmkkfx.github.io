import React from 'react';

import styles from './Error.module.css';

const Custom404: React.FC = () => (
  <>
    <div className={styles.root}>
      <div>
        <h1 className={styles.heading}>404</h1>
        <div className={styles.subtitleContainer}>
          <h2 className={styles.subtitle}>This page could not be found.</h2>
        </div>
      </div>
    </div>
  </>
);

export default Custom404;
