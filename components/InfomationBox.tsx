import styles from '../styles/InfomationBox.module.css';
import Image from 'next/image';

type infomationType = {
  title: string;
  text?: string[] | string;
  line: boolean;
  img?: string;
};

//수업안내 및 선생님 정보의 공통적인 layout을 component화 시킴
const InfomationBox = ({ title, text, line, img }: infomationType) => {
  return (
    <div className={`${styles.container} ${line && styles.on}`}>
      <h3 className={styles.title}>{title}</h3>
      {text && <p className={styles.text}>{text}</p>}
      {img && <Image src={img} alt="image" width={92} height={92} />}
    </div>
  );
};

export default InfomationBox;
