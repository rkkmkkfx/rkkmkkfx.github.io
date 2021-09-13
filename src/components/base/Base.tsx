import type { PropsWithChildren } from 'react';

import Header from '../header/Header';
import Footer from '../footer/Footer';

import styles from './Base.module.css';

const Base = ({ children }: PropsWithChildren<unknown>): JSX.Element => (
  <>
    <Header />
    <main className={styles.wrapper}>
      {children}
    </main>
    <Footer />
  </>
);

export default Base;
