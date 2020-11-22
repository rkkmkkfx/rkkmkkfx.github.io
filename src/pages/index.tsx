import Link from 'next/link';
import Base from '../components/Base';

const Home = () => (
  <Base>
    <div>Hello World. <Link href='/about'><a>About</a></Link></div>
  </Base>
);

export default Home;