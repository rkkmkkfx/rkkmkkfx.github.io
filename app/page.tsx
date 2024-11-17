import { type ReactElement } from 'react';
import Head from 'next/head';
import Greetings from './ui/components/greetings';
import Loader from './ui/components/loader';

export default function HomePage(): ReactElement {
  return (
    <>
      <Head>
        <title>Sergey Baranov | Web Developer</title>
      </Head>
      <Greetings text={['Hello', 'There']} image={<Loader />} />
    </>
  );
}
