import { type ReactElement } from 'react';
import type { Metadata } from 'next';
import AnimatedLogo from './ui/components/animated-logo';

import styles from './Home.module.css';

export const metadata: Metadata = {
  title: 'Sergey Baranov | Web Developer',
};

export default function HomePage(): ReactElement {
  return (
    <div className={styles.root}>
      <h1 className={styles.heading}>
        <span className={`${styles.line} ${styles.shadow}`}>Hello</span>
        <span className={`${styles.line} ${styles.shadow}`}>World</span>
      </h1>
      <AnimatedLogo />
    </div>
  );
}
