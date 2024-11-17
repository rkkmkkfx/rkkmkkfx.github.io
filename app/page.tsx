import { type ReactElement } from 'react';
import type { Metadata } from 'next';
import Greetings from './ui/components/greetings';
import Loader from './ui/components/loader';

export const metadata: Metadata = {
  title: 'Sergey Baranov | Web Developer',
};

export default function HomePage(): ReactElement {
  return (
    <>
      <Greetings text={['Hello', 'There']} image={<Loader />} />
    </>
  );
}
