import { type ReactElement } from 'react';
import Image from 'next/image';

import styles from './Logo.module.css';

export default function Logo(): ReactElement {
  return (
    <div className={styles.root}>
      <Image
        alt=""
        width={30}
        height={30}
        className={styles.img}
        src="/static/img/logo.svg"
      />
      rkkmkkfx.dev/
    </div>
  );
}
