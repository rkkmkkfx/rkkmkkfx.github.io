import { type ReactElement } from 'react';
import type { Metadata } from 'next';

import Works from './components/works';
import { data } from '../lib/data';

export const metadata: Metadata = {
  title: 'Work | Sergey Baranov | Web Developer',
};

export default function WorkPage(): ReactElement {
  return (
    <>
      <h2>HTML Layout</h2>
      <Works links={data}
      />
    </>
  );
}
