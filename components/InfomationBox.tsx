import styles from '../styles/InfomationBox.module.css';
import Image from 'next/image';

type infomationType = {
  title: string;
  text?: string[] | string;
  line: boolean;
  img?: string;
};

const InfomationBox = ({ title, text, line, img }: infomationType) => {
  return (
    <div className={`${styles.container} ${line && styles.on}`}>
      <h3 className={styles.title}>{title}</h3>
      {text && <p className={styles.text}>{text}</p>}
      {img && (
        <Image
          src={img}
          alt="image"
          width={92}
          height={92}
          // className={styles.userIcon}
        />
      )}
    </div>
  );
};

export default InfomationBox;
