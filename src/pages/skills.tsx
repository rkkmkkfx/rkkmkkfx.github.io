import React from 'react';
import Head from 'next/head';
import Skills from '../components/Skills';

const SkillsPage = () => (
  <>
    <Head>
      <title>Tech Skills | Sergey Baranov | Web Developer</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <Skills />
  </>
);

export default SkillsPage;
