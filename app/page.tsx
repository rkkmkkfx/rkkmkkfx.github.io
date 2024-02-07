import Head from 'next/head';
import Greetings from './ui/components/greetings';
import Loader from './ui/components/loader';

const HomePage = (): JSX.Element => (
  <>
    <Head>
      <title>Sergey Baranov | Web Developer</title>
    </Head>
    <Greetings text={['Hello', 'There']} image={<Loader />} />
  </>
);

export default HomePage;
