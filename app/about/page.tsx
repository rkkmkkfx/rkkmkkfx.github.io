import { type ReactElement } from 'react';
import type { Metadata } from 'next';

import styles from './About.module.css';

export const metadata: Metadata = {
  title: 'About Me | Sergey Baranov | Web Developer',
};

function calculateAge(birthday) { // birthday is a date
  const ageDifMs = Date.now() - birthday;
  const ageDate = new Date(ageDifMs); // miliseconds from epoch
  return Math.abs(ageDate.getUTCFullYear() - 1970);
}

export default function AboutPage(): ReactElement {
  return (
    <>
      <h1>About me</h1>
      <p>
        I'm Sergey, a {calculateAge(new Date(1985, 8, 14))} year old
        web developer based in Russia, passionate about building things for the web.
      </p>
      <p>
        With over a decade of experience, I specialise in front-end engineering — primarily
        React, TypeScript, and Next.js. I care about clean architecture, performance, and
        delivering interfaces that actually feel good to use.
      </p>
      <p>
        Beyond the front end I'm comfortable across the full stack: Node.js, Express,
        Socket.io on the server side, and PostgreSQL or MongoDB for data storage.
        I've shipped everything from small marketing sites to data-heavy SaaS dashboards.
      </p>
      <p>
        Outside of work I spend time with my family, unwind with video games,
        and dig into music production and DJing.
      </p>
      <p>
        Got a project or just want to talk tech? Feel free to{' '}
        <a className={styles.link} href="mailto:hello@rkkmkkfx.dev">reach out</a>.
        I'm always open to interesting work — new builds, refactors, or tricky technical problems.
      </p>
    </>
  );
}
