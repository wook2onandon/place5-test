import HeadInfo from '@/components/HeadInfo';
import styles from '../styles/index.module.css';

export default function Home() {
  return (
    <>
      <HeadInfo title="김과외" />
      <div className={styles.container}>선생님 목록을 눌러주세요.</div>
    </>
  );
}
