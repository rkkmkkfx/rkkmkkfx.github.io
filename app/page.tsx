import { type ReactElement } from 'react';
import type { Metadata } from 'next';
import AnimatedLogo from './ui/components/animated-logo';

import styles from './Home.module.css';

export const metadata: Metadata = {
  title: 'Sergey Baranov | Web Developer',
};

const taglines = ['React', 'TypeScript', 'Next.js', 'Node.js'];
const taglineDelay = 0.4;
const tagStagger = 0.15;

export default function HomePage(): ReactElement {
  return (
    <div className={styles.root}>
      <h1 className={styles.heading}>
        <span className={`${styles.line} ${styles.shadow}`}>Hello</span>
        <span className={`${styles.line} ${styles.shadow}`}>World</span>
      </h1>
      <p className={styles.tagline}>
        Web developer crafting with{' '}
        {taglines.map((tag, i) => (
          <span
            key={tag}
            className={styles.tag}
            style={{ animationDelay: `${taglineDelay + i * tagStagger}s` }}
          >
            {tag}{i < taglines.length - 1 ? ' · ' : ''}
          </span>
        ))}
      </p>
      <AnimatedLogo />
    </div>
  );
}
