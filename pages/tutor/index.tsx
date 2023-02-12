import Link from 'next/link';
import Image from 'next/image';
import styles from '../../styles/tutor.module.css';
import HeadInfo from '@/components/HeadInfo';
import { tutor } from '@/data/tutor';

const index = () => {
  return (
    <>
      <HeadInfo title="김과외 | 선생님 목록" />
      <div className={styles.container}>
        <div>선생님 목록</div>
        <ul className={styles.wrap}>
          {tutor.map((tutor) => {
            return (
              <li key={tutor.id}>
                <Link href={`/tutor/${tutor.userId}`}>
                  <Image
                    src={tutor.imageUrl}
                    alt="logo"
                    width={152}
                    height={152}
                  />
                </Link>
                <div>{tutor.userId}</div>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default index;
