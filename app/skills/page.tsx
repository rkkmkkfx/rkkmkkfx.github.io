import { type ReactElement } from 'react';
import Head from 'next/head';
import Skills from './components/skills';

export default function SkillsPage(): ReactElement {
  return (
    <>
      <Head>
        <title>Tech Skills | Sergey Baranov | Web Developer</title>
      </Head>
      <Skills />
    </>
  );
}
