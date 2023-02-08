import styles from '../styles/Nav.module.css';
import Image from 'next/image';

const navMenu = [
  '선생님 목록',
  '커뮤니티',
  '대학 합격사례',
  '학습자료 찾기',
  '찜한 선생님',
  '내 요청서 관리',
];

const Nav = () => {
  return (
    <nav className={styles.container}>
      <div className={styles.upWrap}>
        <div className={styles.logoWrap}>
          <Image
            src="/images/logo.png"
            alt="logo"
            width={100}
            height={24}
            className={styles.logo}
          />
          <div className={styles.title}>선생님 찾기</div>
          <Image
            src="/images/open.png"
            alt="logo"
            width={20}
            height={20}
            className={styles.titleArrow}
          />
        </div>
        <ul className={styles.userInfoWrap}>
          <li className={styles.userInfoBtn}>로그아웃</li>
          <div className={styles.dot} />
          <li className={styles.userInfoBtn}>내 정보</li>
          <div className={styles.dot} />
          <li className={styles.userInfoBtn}>고객센터</li>
        </ul>
      </div>
      <ul className={styles.downWrap}>
        {navMenu.map((menu, idx) => (
          <li key={idx} className={styles.navMenu}>
            {menu}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Nav;
