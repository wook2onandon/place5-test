import styles from '../styles/Nav.module.css';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

const navMenu = [
  {
    title: '선생님 목록',
    url: '/tutor',
  },
  {
    title: '커뮤니티',
    url: '/',
  },
  {
    title: '대학 합격사례',
    url: '/',
  },
  {
    title: '학습자료 찾기',
    url: '/',
  },
  {
    title: '찜한 선생님',
    url: '/',
  },
  {
    title: '내 요청서 관리',
    url: '/',
  },
];

const Nav = () => {
  const [isSelected, setIsSelected] = useState<null | number>(null);

  const handleSelectedMenu = (idx: number) => {
    setIsSelected(idx);
  };

  const router = useRouter();

  useEffect(() => {
    if (router.pathname === '/tutor' || router.pathname === '/tutor/[id]') {
      setIsSelected(0);
    } else if (router.pathname === '/') {
      setIsSelected(null);
    }
  });

  return (
    <nav className={styles.container}>
      <div className={styles.upWrap}>
        <div className={styles.logoWrap}>
          <Link href="/">
            <Image
              src="/images/logo.png"
              alt="logo"
              width={100}
              height={24}
              className={styles.logo}
            />
          </Link>
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
          <Link href={menu.url} key={idx}>
            <li
              className={`${styles.navMenu} ${
                isSelected === idx && styles.active
              }`}
              onClick={() => handleSelectedMenu(idx)}
            >
              {menu.title}
            </li>
          </Link>
        ))}
      </ul>
    </nav>
  );
};

export default Nav;
