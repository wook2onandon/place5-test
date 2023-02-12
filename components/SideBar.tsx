import styles from '../styles/SideBar.module.css';
import Image from 'next/image';
import ChatModal from './ChatModal';
import { useState } from 'react';

//side bar의 menu
const sideBarMenu = [
  '과외선생님',
  '과외학생',
  '학원',
  '학원학생',
  '학원강사',
  '채용공고 지원',
];

const SideBar = () => {
  const [sideTabNum, setSideTabNum] = useState<null | number>(null);
  const [isTabActive, setIsTabActive] = useState<boolean>(false);

  //side bar의 menu클릭시 chatModal을 열어주고 닫아주는 function
  const handleChatModal = (idx: number) => {
    if (!isTabActive) {
      setIsTabActive(true);
      setSideTabNum(idx);
      return;
    } else if (sideTabNum === idx) {
      setIsTabActive(false);
      setSideTabNum(null);
      return;
    } else {
      setSideTabNum(idx);
      return;
    }
  };

  //x버튼을 누를 경우 chatModal을 닫아주는 function
  const handleModalClose = () => {
    setIsTabActive(false);
    setSideTabNum(null);
  };

  return (
    <>
      <article className={styles.container}>
        <div className={styles.wrap}>
          <div className={styles.chatWrap}>
            <span className={styles.chatTitle}>채팅</span>
            <Image
              src="/images/BottomBarIcon.png"
              alt="logo"
              width={20}
              height={20}
            />
          </div>
          <ul className={styles.listWrap}>
            {sideBarMenu.map((menu, idx) => (
              <li
                className={`${styles.sideList} ${
                  sideTabNum === idx && styles.active
                }`}
                onClick={() => handleChatModal(idx)}
                key={idx}
              >
                {menu}
              </li>
            ))}
          </ul>
        </div>
        <ChatModal modalClose={handleModalClose} isTabActive={isTabActive} />
      </article>
    </>
  );
};

export default SideBar;
