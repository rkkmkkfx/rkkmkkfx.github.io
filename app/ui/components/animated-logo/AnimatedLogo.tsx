'use client';

import { useRef, useEffect, type ReactElement } from 'react';

import Scene from './classes/Scene';

import styles from './AnimatedLogo.module.css';

export default function AnimatedLogo(): ReactElement {
  const containerRef = useRef(null);

  useEffect(() => {
    const container: HTMLCanvasElement | null = containerRef.current;

    if (!container) {
      return;
    }
    const scene = new Scene(container, styles.canvas);

    return () => {
      scene.destroy();
    };
  }, [containerRef]);

  return <div className={styles.image} ref={containerRef} />
}
