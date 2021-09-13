import Image from 'next/image';
import { v4 as uuidv4 } from 'uuid';

import styles from './Skills.module.css';

const techs = [
  '/rkkmkkfx.dev/skills/HTML5_logo_and_wordmark.svg',
  '/rkkmkkfx.dev/skills/CSS3_logo_and_wordmark.svg',
  '/rkkmkkfx.dev/skills/Unofficial_JavaScript_logo_2.svg',
  '/rkkmkkfx.dev/skills/React-icon.svg',
  '/rkkmkkfx.dev/skills/Sass_Logo_Color.svg',
  '/rkkmkkfx.dev/skills/Typescript_logo_2020.svg',
  '/rkkmkkfx.dev/skills/Nextjs-logo.svg',
  '/rkkmkkfx.dev/skills/rest.svg',
  '/rkkmkkfx.dev/skills/Node.js_logo.svg',
  '/rkkmkkfx.dev/skills/Docker__28container_engine_29_logo.svg',
  '/rkkmkkfx.dev/skills/Github-desktop-logo-symbol.svg',
  '/rkkmkkfx.dev/skills/Nginx_logo.svg',
];

const Skills = (): JSX.Element => (
  <section className={styles.root}>
    {techs.map((tech) => (
      <div key={uuidv4()} className={styles.cell}>
        <Image layout="fill" className={styles.img} src={tech} alt="" />
      </div>
    ))}
  </section>
);

export default Skills;
