import Link from 'next/link';
import Image from 'next/image';
import styles from '../../styles/tutor.module.css';
import HeadInfo from '@/components/HeadInfo';

const index = () => {
  return (
    <>
      <HeadInfo title="김과외 | 선생님 목록" />
      <div className={styles.container}>
        <div>선생님 목록</div>
        <ul className={styles.wrap}>
          <li>
            <Link href="/tutor/kimtest">
              <Image
                src="/images/user.png"
                alt="logo"
                width={152}
                height={152}
              />
            </Link>
            <div>kimtest</div>
          </li>
        </ul>
      </div>
    </>
  );
};

export default index;
