import { type ReactElement } from 'react';
import Image from 'next/image';
import { v4 as uuidv4 } from 'uuid';

import styles from './Skills.module.css';

const techs = [
  'https://raw.githubusercontent.com/devicons/devicon/master/icons/nextjs/nextjs-original.svg',
  'https://github.com/devicons/devicon/raw/master/icons/react/react-original.svg',
  'https://github.com/devicons/devicon/raw/master/icons/redux/redux-original.svg',
  'https://github.com/devicons/devicon/raw/master/icons/materialui/materialui-original.svg',
  'https://raw.githubusercontent.com/devicons/devicon/master/icons/bootstrap/bootstrap-original.svg',
  'https://github.com/devicons/devicon/raw/master/icons/css3/css3-plain.svg',
  'https://github.com/devicons/devicon/raw/master/icons/html5/html5-original.svg',
  'https://github.com/devicons/devicon/raw/master/icons/javascript/javascript-original.svg',
  'https://github.com/devicons/devicon/raw/master/icons/typescript/typescript-original.svg',
  'https://raw.githubusercontent.com/devicons/devicon/master/icons/webpack/webpack-plain.svg',
  'https://raw.githubusercontent.com/devicons/devicon/master/icons/eslint/eslint-original.svg',
  'https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-plain.svg',
  'https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original.svg',
  'https://raw.githubusercontent.com/devicons/devicon/master/icons/socketio/socketio-original.svg',
  'https://raw.githubusercontent.com/devicons/devicon/master/icons/git/git-original.svg',
  'https://raw.githubusercontent.com/devicons/devicon/master/icons/docker/docker-original.svg',
  'https://raw.githubusercontent.com/devicons/devicon/master/icons/webstorm/webstorm-plain.svg',
];

export default function Skills(): ReactElement {
  return (
    <section className={styles.root}>
      {techs.map((tech) => (
        <div key={uuidv4()} className={styles.cell}>
          <Image width={200} height={200} className={styles.img} src={tech} alt="" />
        </div>
      ))}
    </section>
  );
}
