import styles from '../styles/ChatModal.module.css';
import Image from 'next/image';
import { SetStateAction, useEffect, useState } from 'react';
import { mockData } from '@/data/mock';
import { formatAgo } from '@/util/date';
import Link from 'next/link';

type chatDetailType = {
  id: number;
  imageUrl: string;
  nickName: string;
  description: string;
  lastChat: string;
  completed: boolean;
  subject: string[];
  userId: string;
  time: any;
  read: number;
};

type modalCloseType = {
  modalClose: () => void;
  isTabActive: boolean;
};

const subjectsGrade = [
  '중등수학',
  '고등수학',
  '초등수학',
  '중등영어',
  '고등영어',
];

const subjects = ['과목 전체', '수학', '영어', '언어', '사탐', '과탐'];

const topMenus = ['목록 편집', '차단계정 목록', '채팅 알림끄기'];

const ChatModal = ({ modalClose, isTabActive }: modalCloseType) => {
  const [selectedGrade, setSelectedGrade] = useState<string>('');
  const [selectedSubject, setSelectedSubject] = useState<string>('');
  const [activeTopMenu, setActiveTopMenu] = useState<boolean>(false);

  const handleSelectGrade = (e: {
    target: { value: SetStateAction<string> };
  }) => {
    setSelectedGrade(e.target.value);
  };

  const handleSelectSubject = (e: {
    target: { value: SetStateAction<string> };
  }) => {
    setSelectedSubject(e.target.value);
  };

  const handleTopMenu = () => {
    setActiveTopMenu((status: boolean) => !status);
  };

  const handleSelectTopMenu = (menu: string) => {
    alert(menu);
  };

  useEffect(() => {
    if (!isTabActive) {
      setActiveTopMenu(false);
    }
  }, [isTabActive]);

  return (
    <article
      className={`${styles.container} ${isTabActive && styles.activeModal}`}
    >
      <div className={styles.closeBtn} onClick={() => modalClose()}>
        <Image src="/images/delete.png" alt="logo" width={18} height={18} />
      </div>
      <div className={styles.titleWrap}>
        <div className={styles.title}>과외선생님 찾기</div>
        <div className={styles.titleMenuWrap} onClick={handleTopMenu}>
          <Image
            src="/images/TopBarIcon.png"
            alt="menu"
            width={28}
            height={28}
          />
        </div>
        {activeTopMenu && (
          <ul className={styles.titleMenuList}>
            {topMenus.map((menu, idx) => (
              <li key={idx} onClick={() => handleSelectTopMenu(menu)}>
                {menu}
              </li>
            ))}
          </ul>
        )}
      </div>
      <div className={styles.categoryWrap}>
        <div>
          <select
            className={styles.gradeSeletBox}
            onChange={handleSelectGrade}
            value={selectedGrade}
          >
            {subjectsGrade.map((item, idx) => (
              <option value={item} key={idx}>
                {item}
              </option>
            ))}
          </select>
        </div>
        <div>
          <select
            className={styles.subjectSeletBox}
            onChange={handleSelectSubject}
            value={selectedSubject}
          >
            {subjects.map((item) => (
              <option value={item} key={item}>
                {item}
              </option>
            ))}
          </select>
        </div>
      </div>
      <ul className={styles.chatListWrap}>
        {mockData.map((data: chatDetailType) => {
          return (
            <li className={styles.chatList} key={data.id}>
              <Link href={`/tutor/${data.userId}`}>
                <Image src={data.imageUrl} alt="logo" width={40} height={40} />
              </Link>
              <div className={styles.chatItemWrap}>
                <div className={styles.chatUserContainer}>
                  <div className={styles.chatUserWrap}>
                    <span className={styles.chatUser}>{data.nickName}</span>
                    <h4 className={styles.chatUserDetail}>
                      {data.description.length > 22
                        ? `${data.description.substring(0, 22)}...`
                        : data.description}
                    </h4>
                    {/* 시간을 ~전으로 바꿔주는 timeago.js 라이브러리 사용 */}
                  </div>
                  <div className={styles.chatTime}>{formatAgo(data.time)}</div>
                </div>
                <div className={styles.chatDetailWrap}>
                  <div className={styles.chatDetail}>
                    {data.lastChat.length > 26
                      ? `${data.lastChat.substring(0, 26)}...`
                      : data.lastChat}
                  </div>
                  {data.read !== 0 && (
                    <div className={styles.chatRead}>
                      <span>{data.read}</span>
                    </div>
                  )}
                </div>
                <ul className={styles.subjectWrap}>
                  {data.completed && (
                    <li className={styles.complete}>성사완료</li>
                  )}
                  {data.subject.map((sub, idx) => (
                    <li className={styles.subject} key={idx}>
                      {sub}
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          );
        })}
      </ul>
    </article>
  );
};

export default ChatModal;
