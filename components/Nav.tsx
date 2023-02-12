import styles from '../styles/Nav.module.css';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { handleAlert } from '@/util/alert';

//nav메뉴
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

  //nav bar의 메뉴 선택시 index값을 받아오는 function
  const handleSelectedMenu = (idx: number) => {
    setIsSelected(idx);
  };

  const router = useRouter();

  //url의 pathname을 가져와 선생님 목록일 경우만 active상태로 만들어 주는 logic.
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
          <div
            className={styles.titleWrap}
            onClick={() => handleAlert('카테고리선택을 누르셨습니다.')}
          >
            <div className={styles.title}>선생님 찾기</div>
            <Image
              src="/images/open.png"
              alt="logo"
              width={20}
              height={20}
              className={styles.titleArrow}
            />
          </div>
        </div>
        <ul className={styles.userInfoWrap}>
          <li
            className={styles.userInfoBtn}
            onClick={() => handleAlert('로그아웃하였습니다.')}
          >
            로그아웃
          </li>
          <div className={styles.dot} />
          <li
            className={styles.userInfoBtn}
            onClick={() => handleAlert('내정보를 선택했습니다.')}
          >
            내 정보
          </li>
          <div className={styles.dot} />
          <li
            className={styles.userInfoBtn}
            onClick={() => handleAlert('고객센터를 선택했습니다.')}
          >
            고객센터
          </li>
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
