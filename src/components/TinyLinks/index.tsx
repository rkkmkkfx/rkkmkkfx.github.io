import React from 'react';
import dynamic from 'next/dynamic';
import { v4 as uuidv4 } from 'uuid';

import styles from './TinyLinks.module.css';

const ReactTinyLink = dynamic(
  () => import('react-tiny-link').then((mod) => mod.ReactTinyLink),
  { ssr: false },
);

const TinyLinks: React.FC = ({ links }) => (
  <div className={styles.root}>
    {links && links.map((link) => (
      <ReactTinyLink
        key={uuidv4()}
        cardSize="small"
        showGraphic
        maxLine={2}
        minLine={1}
        proxyUrl="https://rkkmkk-cors.herokuapp.com/"
        {...link}
      />
    ))}
  </div>
);

export default TinyLinks;
