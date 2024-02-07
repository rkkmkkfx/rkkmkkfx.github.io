import { type ReactElement } from 'react';
import Head from 'next/head';

import Works from '../src/components/works/Works';
import { data } from '../app/lib/data';

const WorkPage = (): ReactElement => (
  <>
    <Head>
      <title>Work |  Sergey Baranov | Web Developer</title>
    </Head>
    <h2>HTML Layout</h2>
    <Works links={data}
    />
  </>
);

export default WorkPage;
