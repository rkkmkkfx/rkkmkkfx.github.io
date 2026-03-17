import { type ReactElement } from 'react';
import type { Metadata } from 'next';

import styles from './About.module.css';

export const metadata: Metadata = {
  title: 'About Me | Sergey Baranov | Web Developer',
};


export default function AboutPage(): ReactElement {
  return (
    <>
      <h1>About me</h1>
      <p>
        I'm Sergey — a web developer with over a decade of experience,
        focused on front-end engineering with React, TypeScript, and Next.js.
      </p>
      <p>
        I care about clean architecture, performance, and interfaces that hold up under real use.
        On the back end, I work with Node.js, Express, and Socket.io,
        and reach for PostgreSQL or MongoDB depending on the problem.
      </p>
      <p>
        Outside of work I spend time with my family, play video games,
        and produce music.
      </p>
      <p>
        If you have something worth building, feel free to{' '}
        <a className={styles.link} href="mailto:hello@rkkmkkfx.dev">get in touch</a>.
      </p>
    </>
  );
}
