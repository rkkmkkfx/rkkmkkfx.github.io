import { type ReactElement } from 'react';
import type { Metadata } from 'next';

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
        web developer focused on creating solutions for the web.
      </p>
      <p>
        I specialize in developing web applications using React, TypeScript, and Next.js.
        With over 10 years of experience, I focus on building efficient and user-friendly solutions.
      </p>
      <p>
        While my primary expertise is in front-end development, I also work with back-end technologies
        including Node.js and databases such as MongoDB and PostgreSQL.
      </p>
      <p>
        When not coding, I spend time with my family, play video games,
        and pursue interests in music production and DJing.
      </p>
      <p>
        If you have a project to discuss, feel free to reach out. I'm open to opportunities
        involving new development, optimization, or complex technical challenges.
      </p>
    </>
  );
}
