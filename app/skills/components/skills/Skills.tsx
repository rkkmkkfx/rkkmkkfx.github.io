import { type ReactElement } from 'react';
import Image from 'next/image';

import styles from './Skills.module.css';

const techs: { name: string; url: string }[] = [
  { name: 'Next.js', url: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/nextjs/nextjs-original.svg' },
  { name: 'React', url: 'https://github.com/devicons/devicon/raw/master/icons/react/react-original.svg' },
  { name: 'Redux', url: 'https://github.com/devicons/devicon/raw/master/icons/redux/redux-original.svg' },
  { name: 'Material UI', url: 'https://github.com/devicons/devicon/raw/master/icons/materialui/materialui-original.svg' },
  { name: 'Bootstrap', url: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/bootstrap/bootstrap-original.svg' },
  { name: 'CSS3', url: 'https://github.com/devicons/devicon/raw/master/icons/css3/css3-plain.svg' },
  { name: 'HTML5', url: 'https://github.com/devicons/devicon/raw/master/icons/html5/html5-original.svg' },
  { name: 'JavaScript', url: 'https://github.com/devicons/devicon/raw/master/icons/javascript/javascript-original.svg' },
  { name: 'TypeScript', url: 'https://github.com/devicons/devicon/raw/master/icons/typescript/typescript-original.svg' },
  { name: 'Webpack', url: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/webpack/webpack-plain.svg' },
  { name: 'ESLint', url: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/eslint/eslint-original.svg' },
  { name: 'Node.js', url: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-plain.svg' },
  { name: 'Express', url: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original.svg' },
  { name: 'Socket.io', url: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/socketio/socketio-original.svg' },
  { name: 'Git', url: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/git/git-original.svg' },
  { name: 'Docker', url: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/docker/docker-original.svg' },
  { name: 'WebStorm', url: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/webstorm/webstorm-plain.svg' },
];

export default function Skills(): ReactElement {
  return (
    <section className={styles.root}>
      {techs.map((tech) => (
        <div key={tech.name} className={styles.cell}>
          <Image width={64} height={64} className={styles.img} src={tech.url} alt={tech.name} />
          <span className={styles.label}>{tech.name}</span>
        </div>
      ))}
    </section>
  );
}
