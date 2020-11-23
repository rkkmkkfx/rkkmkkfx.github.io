import React from 'react';
import Head from 'next/head';
import Greetings from '../components/Greetings';
import Loader from '../components/Loader';

const HomePage = () => (
  <>
    <Head>
      <title>Sergey Baranov | Web Developer</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <Greetings text={['Hello', 'There']} image={<Loader />} />
  </>
);

export default HomePage;
