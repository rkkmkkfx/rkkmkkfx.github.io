import React from 'react';

import styles from './Greetings.module.css';

const Heading: React.FC = ({ text, imgSrc }) => {
  return (
    <div className={styles.root}>
      <h1 className={styles.heading}>
        {text.map(line => (<span className={styles.line}>{line}</span>))}
      </h1>
      {imgSrc && <img src={imgSrc} />}
    </div>
  );
};

export default Heading;
