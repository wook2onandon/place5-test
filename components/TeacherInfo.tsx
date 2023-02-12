import { handleAlert } from '@/util/alert';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import styles from '../styles/TeacherInfo.module.css';

type teachInfoWrapType = {
  data: teacherInfoType;
};

type teacherInfoType = {
  userId: string; // 유저 id
  nickname: string; // 닉네임
  description: string; // 대학 학과 학번 성별 정보
  isCertified: boolean; //인증된 선생님인지 여부
  isPopular: boolean; // 인기 선생님인지 여부
  isSpecial: boolean; // 전문과외 선생님인지 여부
  area: string[]; // 과외 가능지역 리스트
  specialSubjects: string[]; // 전문과목 리스트
  ranking: number; // 김과외 랭킹
  payAverage: number; //평균 수업료
  matchingCount: number; // 과외 성사 건수
  recruitCount: number; // 모집중인 학생 수
};

const TeacherInfo = ({ data }: teachInfoWrapType) => {
  const [isActiveBalloon, setIsActiveBalloon] = useState<boolean>(false);
  const [isLike, setIsLike] = useState<boolean>(false);
  const [likePopUp, setLikePopUp] = useState<boolean>(false);
  const [clickImpossible, setClickImpossible] = useState<boolean>(false);

  //인증버튼 말풍선 function
  const hadleBalloon = () => {
    setIsActiveBalloon(true);
  };

  //찜하기 버튼 function
  const handleLikeBtn = () => {
    if (window.localStorage.getItem('like') === 'true') {
      window.localStorage.setItem('like', 'false');
      setIsLike(false);
      setLikePopUp(false);
    } else {
      window.localStorage.setItem('like', 'true');
      setIsLike(true);
      setLikePopUp(true);
    }
  };

  //페이지 접속시 localStorage를 탐색하여 찜이 되어있는지 확인하는 logic
  useEffect(() => {
    if (window.localStorage.getItem('like') === 'true') {
      setIsLike(true);
    } else {
      setIsLike(false);
    }
  }, []);

  //찜하기 클릭시 메세지팝업 띄우고 3초뒤 사라지게 하는 logic
  useEffect(() => {
    if (likePopUp === true) {
      setClickImpossible(true);
      const animateDelay = setTimeout(() => {
        setClickImpossible(false);
        setLikePopUp(false);
        clearTimeout(animateDelay);
      }, 3000);
    }
  }, [likePopUp]);

  //인증버튼 누를경우 인증문구 띄우고 3초뒤 사라지게 하기
  useEffect(() => {
    if (isActiveBalloon === true) {
      const animateDelay = setTimeout(() => {
        setIsActiveBalloon(false);
        clearTimeout(animateDelay);
      }, 3000);
    }
  }, [isActiveBalloon]);

  return (
    <>
      <div className={styles.container}>
        <div className={styles.userIconWrap}>
          <Image
            src="/images/user.png"
            alt="logo"
            width={152}
            height={152}
            className={styles.userIcon}
          />
        </div>
        <div className={styles.nicknameWrap}>
          <h2 className={styles.nickname}>{data.nickname}</h2>
          {data.isCertified && (
            <div className={styles.certifiedWrap} onClick={hadleBalloon}>
              <Image
                src="/images/certification.png"
                alt="logo"
                width={20}
                height={20}
                className={styles.certificationIcon}
              />
              <span className={styles.certified}>인증</span>
              {isActiveBalloon && (
                <div className={styles.balloon}>
                  김과외에서 신원과 학력이 인증된 선생님입니다.
                </div>
              )}
            </div>
          )}
        </div>
        <div className={styles.descriptionWrap}>
          <h3 className={styles.description}>{data.description}</h3>
          <div className={styles.iconWrap}>
            {data.isPopular && <span className={styles.hotIcon}>인기</span>}
            {data.isSpecial && (
              <span className={styles.specialityIcon}>전문과외</span>
            )}
          </div>
        </div>
        <div className={styles.areaWrap}>
          <Image
            src="/images/location_fill.png"
            alt="logo"
            width={16}
            height={16}
          />
          <h4 className={styles.area}>{data.area}</h4>
        </div>
        <div className={styles.specialWrap}>
          <Image src="/images/book.png" alt="logo" width={16} height={16} />
          <h4 className={styles.special}>
            {data.specialSubjects.length > 1
              ? data.specialSubjects.join(', ')
              : data.specialSubjects}
          </h4>
        </div>
        <ul className={styles.IndicatorsContainer}>
          <li className={styles.IndicatorsWrap}>
            <p className={styles.IndicatorsTitle}>김과외 랭킹</p>
            <span className={styles.Indicators}>{`${data.ranking}위`}</span>
          </li>
          <li className={styles.IndicatorsWrap}>
            <p className={styles.IndicatorsTitle}>평균 수업료</p>
            <span
              className={styles.Indicators}
            >{`${data.payAverage}만원`}</span>
          </li>
          <li className={styles.IndicatorsWrap}>
            <p className={styles.IndicatorsTitle}>과외 성사 건수</p>
            <span
              className={styles.Indicators}
            >{`${data.matchingCount}건`}</span>
          </li>
        </ul>
        <div className={styles.timeWrap}>
          <span className={styles.timeTitle}>마감임박</span>
          <div
            className={styles.timeText}
          >{`${data.recruitCount}명의 학생만 모집중입니다.`}</div>
        </div>
        <div
          className={`${styles.likeWrap} ${isLike && styles.likeWrapOn} ${
            clickImpossible && styles.clickImpossible
          }`}
          onClick={handleLikeBtn}
        >
          <Image
            src={isLike ? '/images/heart_color.png' : '/images/heart_line.png'}
            alt="logo"
            width={18}
            height={18}
            className={styles.certificationIcon}
          />
          <span
            className={`${styles.likeTitle} ${isLike && styles.likeTitleOn}`}
          >
            {isLike ? '찜 취소' : '찜 하기'}
          </span>
        </div>
        <div
          className={styles.consulting}
          onClick={() => handleAlert('과외 상담하기를 선택하셨습니다.')}
        >
          과외 상담하기
        </div>
        <ul className={styles.helpWrap}>
          <li
            className={styles.helpTitle}
            onClick={() => {
              handleAlert('차단했습니다.');
            }}
          >
            차단
          </li>
          <li className={styles.helpTitle}>|</li>
          <li
            className={styles.helpTitle}
            onClick={() => handleAlert('신고하였습니다.')}
          >
            신고
          </li>
        </ul>
      </div>
      {likePopUp && (
        <div className={styles.likePopUp}>
          내가 찜한 선생님에 등록되었습니다.
        </div>
      )}
    </>
  );
};

export default TeacherInfo;
