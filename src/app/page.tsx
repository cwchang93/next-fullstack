import { Inter } from '@next/font/google';
import React from 'react';
import styles from './page.module.css';

const inter = Inter({ subsets: ['latin'] });

const Home = ():JSX.Element => (

  <main className={styles.main}>
    Home Page
    <h2 className={inter.className}>
      Docs
      {' '}
      <span>-&gt;</span>
    </h2>
  </main>
);

export default Home;
