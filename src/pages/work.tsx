import React from 'react';
import Head from 'next/head';
import Heading from '../components/Greetings';

const WorkPage = () => (
  <>
    <Head>
      <title>Work |  Sergey Baranov | Web Developer</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <Heading text={['Coming', 'Soon']} />
  </>
);

export default WorkPage;
