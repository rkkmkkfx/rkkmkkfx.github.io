import Head from 'next/head';
import Skills from '../src/components/skills/Skills';

const SkillsPage = (): JSX.Element => (
  <>
    <Head>
      <title>Tech Skills | Sergey Baranov | Web Developer</title>
    </Head>
    <Skills />
  </>
);

export default SkillsPage;
