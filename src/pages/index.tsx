import React from 'react';
import Head from 'next/head';
import Greetings from '../components/Greetings';
import Loader from '../components/Loader';

const HomePage = () => (
  <>
    <Head>
      <title>Sergey Baranov | Web Developer</title>
    </Head>
    <Greetings text={['Hello', 'There']} image={<Loader />} />
  </>
);

export default HomePage;
