import React, { useState, useEffect } from 'react';

import Header from '../Header';
import Footer from '../Footer';

import styles from './Base.module.css';

interface BaseProps {
  children: React.ReactNode
}

const Base: React.VFC<BaseProps> = ({ children }) => {
  const [contentHeight, setContentHeight] = useState(0);

  useEffect(() => {
    setContentHeight(window.innerHeight - (document.querySelector('header').offsetHeight + document.querySelector('footer').offsetHeight))
  }, []);
  return (
    <>
      <Header />
      <main className={styles.wrapper} style={{
        height: `${contentHeight}px`
      }}>
        {children}
      </main>
      <Footer />
    </>
  );
}

export default Base;
