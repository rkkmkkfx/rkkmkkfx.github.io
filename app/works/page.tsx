import { type ReactElement } from 'react';
import Head from 'next/head';

import Works from './components/works';
import { data } from '../lib/data';

export default function WorkPage(): ReactElement {
  return (
    <>
      <Head>
        <title>Work |  Sergey Baranov | Web Developer</title>
      </Head>
      <h2>HTML Layout</h2>
      <Works links={data}
      />
    </>
  );
}
