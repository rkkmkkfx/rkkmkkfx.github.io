import React, { useState, useEffect } from 'react';

import Header from '../Header';
import Footer from '../Footer';

import styles from './Base.module.css';

interface BaseProps {
  children: React.ReactNode
}

const Base: React.VFC<BaseProps> = ({ children }) => {
  return (
    <>
      <Header />
      <main className={styles.wrapper}>
        {children}
      </main>
      <Footer />
    </>
  );
}

export default Base;
