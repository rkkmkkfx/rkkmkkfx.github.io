import Image from 'next/image';

import styles from './Logo.module.css';

const Logo = (): JSX.Element => (
  <div className={styles.root}>
    <Image width={30} height={30} src="/static/img/logo.svg" alt="" />
    rkkmkkfx.dev/
  </div>
);

export default Logo;
