import { type ReactElement } from 'react';
import type { Metadata } from 'next';
import Skills from './components/skills';

export const metadata: Metadata = {
  title: 'Tech Skills | Sergey Baranov | Web Developer',
};

export default function SkillsPage(): ReactElement {
  return (
    <>
      <Skills />
    </>
  );
}
