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
        Hi! I'm Sergey, a {calculateAge(new Date(1985, 8, 14))} year old
        web developer who loves creating cool stuff for the internet.
      </p>
      <p>
        I'm all about building modern web apps with React, TypeScript, and Next.js.
        I've been doing this for over 10 years now, and I really enjoy making things
        that work great and are easy to use.
      </p>
      <p>
        While I mostly work on front-end stuff, I'm pretty comfortable with back-end tech too -
        things like Node.js and databases such as MongoDB and PostgreSQL.
      </p>
      <p>
        Outside of coding, you'll find me hanging out with my family or playing video games.
        I also love making music and DJing in my free time!
      </p>
      <p>
        Got an interesting project in mind? Let's chat! Whether it's building something new,
        making things run faster, or tackling tricky technical problems - I'm always up for
        a good challenge.
      </p>
    </>
  );
}
