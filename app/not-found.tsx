import { type ReactElement } from 'react';
import styles from './Home.module.css';

export default function Custom404(): ReactElement {
  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>
        <span className={styles.line}>404</span>
        <span className={`${styles.line} ${styles.subtitle}`}>Page not found</span>
      </h1>
    </div>
  );
}
