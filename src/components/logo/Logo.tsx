import Image from 'next/image';

import styles from './Logo.module.css';

const Logo = (): JSX.Element => (
  <div className={styles.root}>
    <Image
      alt=""
      width={30}
      height={30}
      src="/rkkmkkfx.dev/logo.svg.svg"
    />
    rkkmkkfx.dev/
  </div>
);

export default Logo;
