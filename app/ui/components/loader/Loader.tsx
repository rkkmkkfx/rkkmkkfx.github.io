'use client';

import { useRef, useEffect, ReactElement } from 'react';
import type { PropsWithChildren } from 'react';

import Scene from '../../../classes/Scene';

import styles from './Loader.module.css';

export default function Loader(props: PropsWithChildren<unknown>): ReactElement {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas: HTMLCanvasElement | null = canvasRef.current;

    if (!canvas) {
      return;
    }
    new Scene(canvas);

  }, [canvasRef]);

  return <canvas className={styles.root} ref={canvasRef} {...props} />;
};
