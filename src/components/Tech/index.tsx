import React from 'react';
import Image from 'next/image';
import styles from './Tech.module.css';

const techs = [
  'https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg',
  'https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg',
  'https://upload.wikimedia.org/wikipedia/commons/9/99/Unofficial_JavaScript_logo_2.svg',
  'https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg',
  'https://upload.wikimedia.org/wikipedia/commons/9/96/Sass_Logo_Color.svg',
  'https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg',
  'https://upload.wikimedia.org/wikipedia/commons/8/8e/Nextjs-logo.svg',
  'https://geosrbija.rs/wp-content/uploads/2018/06/7.svg',
  'https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg',
  'https://upload.wikimedia.org/wikipedia/commons/4/4e/Docker_%28container_engine%29_logo.svg',
  'https://upload.wikimedia.org/wikipedia/commons/a/ae/Github-desktop-logo-symbol.svg',
  'https://upload.wikimedia.org/wikipedia/commons/c/c5/Nginx_logo.svg',
];

const Tech: React.FC = () => {
  return (
    <section className={styles.root}>
      {techs.map(tech => <Image className={styles.img} src={tech} layout="intrinsic" width={100} height={100} />)}
    </section>
  );
};

export default Tech;
