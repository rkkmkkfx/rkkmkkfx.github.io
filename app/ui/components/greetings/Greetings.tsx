import { v4 as uuidv4 } from 'uuid';

import styles from './Greetings.module.css';

interface Props {
  text: string[];
  image?: React.ReactNode;
}

const Greetings = ({ text, image }: Props): JSX.Element => (
  <div className={styles.root}>
    <h1 className={styles.heading}>
      {text.map((line) => (<span key={uuidv4()} className={styles.line}>{line}</span>))}
    </h1>
    {image && <div className={styles.image}>{image}</div>}
  </div>
);

export default Greetings;
