import Head from 'next/head';
import Greetings from '../src/components/greetings/Greetings';
import Loader from '../src/components/loader/Loader';

const HomePage = (): JSX.Element => (
  <>
    <Head>
      <title>Sergey Baranov | Web Developer</title>
    </Head>
    <Greetings text={['Hello', 'There']} image={<Loader />} />
  </>
);

export default HomePage;
