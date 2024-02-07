'use client';

import { useRef, useEffect } from 'react';
import type { PropsWithChildren } from 'react';

import Scene from '../../../classes/Scene';

import styles from './Loader.module.css';

const Loader = (props: PropsWithChildren<unknown>): JSX.Element => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas: HTMLCanvasElement | null = canvasRef.current;

    if (!canvas) {
      return;
    }
    new Scene(canvas, { fps: 120, numParticles: 500 }).init();
  }, [canvasRef]);

  return <canvas className={styles.root} ref={canvasRef} {...props} />;
};

export default Loader;
