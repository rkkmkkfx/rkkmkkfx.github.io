import React from 'react';
import { v4 as uuidv4 } from 'uuid';

import styles from './Greetings.module.css';

interface Props {
  text: string[];
  imgSrc?: string;
}

const Greetings: React.FC<Props> = ({ text, imgSrc }) => (
  <div className={styles.root}>
    <h1 className={styles.heading}>
      {text.map((line) => (<span key={uuidv4()} className={styles.line}>{line}</span>))}
    </h1>
    {imgSrc && <img src={imgSrc} alt="" />}
  </div>
);

export default Greetings;
