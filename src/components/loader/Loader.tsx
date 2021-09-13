import { useRef, useEffect } from 'react';
import type { PropsWithChildren } from 'react';

import Scene from '../../classes/Scene';

import styles from './Loader.module.css';

const Loader = (props: PropsWithChildren<unknown>): JSX.Element => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;

    new Scene(canvas, {}).init();
  }, []);

  return <canvas className={styles.root} ref={canvasRef} {...props} />;
};

export default Loader;
