import styles from '../styles/TecherDetailInfo.module.css';
import InfomationBox from './InfomationBox';
import Image from 'next/image';
import { useEffect, useState } from 'react';

type teacherDetailWrap = {
  detail: teacherDetailType;
  data: teacherCertified;
};

type teacherCertified = {
  isCertified: boolean;
};

type teacherDetailType = {
  univInfo: UnivInfo; // 대학정보
  personalities: string[]; // 성격
  schoolInfo: SchoolInfo; // 학교 정보
  passNote: string; // 대학 합격수기
  idUrl: string; // 학생증 이미지 파일
  document: string; // 요청시 제공 가능 서류
};

type UnivInfo = {
  univ: string; // 학교
  isGraduated: boolean; // 졸업여부
  department: string; // 학과
  grade: string; // 학번
  campus: string; // 캠퍼스
};

type SchoolInfo = {
  middle: string; //중학교
  high: string; // 고등학교
  myGrade: string; // 고교 성적
};

const TecherDetailInfo = ({ detail, data }: teacherDetailWrap) => {
  const [isActiveBalloon, setIsActiveBalloon] = useState<boolean>(false);

  const hadleBalloon = () => {
    setIsActiveBalloon(true);
  };

  useEffect(() => {
    if (isActiveBalloon === true) {
      const animateDelay = setTimeout(() => {
        setIsActiveBalloon(false);
        clearTimeout(animateDelay);
      }, 3000);
    }
  }, [isActiveBalloon]);

  return (
    <div className={styles.container}>
      <div className={styles.itemContainer}>
        <div className={styles.titleWrap}>
          <h3 className={styles.itemTitle}>대학정보</h3>
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
        <div className={styles.itemDetailWrap}>
          <h4 className={styles.itemDetailTitle}>학교</h4>
          <div className={styles.itemDetail}>{detail.univInfo.univ}</div>
        </div>
        <div className={styles.itemDetailWrap}>
          <h4 className={styles.itemDetailTitle}>졸업여부</h4>
          <div className={styles.itemDetail}>
            {detail.univInfo.isGraduated ? '졸업' : '재학중'}
          </div>
        </div>
        <div className={styles.itemDetailWrap}>
          <h4 className={styles.itemDetailTitle}>학과</h4>
          <div className={styles.itemDetail}>{detail.univInfo.department}</div>
        </div>
        <div className={styles.itemDetailWrap}>
          <h4 className={styles.itemDetailTitle}>학번</h4>
          <div className={styles.itemDetail}>{detail.univInfo.grade}</div>
        </div>
        <div className={styles.itemDetailWrap}>
          <h4 className={styles.itemDetailTitle}>캠퍼스</h4>
          <div className={styles.itemDetail}>{detail.univInfo.campus}</div>
        </div>
      </div>
      <InfomationBox
        title="성격"
        text={`저는 ${detail.personalities.join(', ')} 성격입니다.`}
        line={true}
      />
      <div className={styles.itemContainer}>
        <h3 className={styles.itemTitle}>학교 정보</h3>
        <div className={styles.itemDetailWrap}>
          <h4 className={styles.itemDetailTitle}>중학교</h4>
          <div className={styles.itemDetail}>{detail.schoolInfo.middle}</div>
        </div>
        <div className={styles.itemDetailWrap}>
          <h4 className={styles.itemDetailTitle}>고등학교</h4>
          <div className={styles.itemDetail}>{detail.schoolInfo.high}</div>
        </div>
        <div className={styles.itemDetailWrap}>
          <h4 className={styles.itemDetailTitle}>고교 성적</h4>
          <div className={styles.itemDetail}>{detail.schoolInfo.myGrade}</div>
        </div>
        <div className={styles.itemDetailImageWrap}>
          <Image
            src="/images/ImageThumnail.png"
            alt="image"
            width={92}
            height={92}
          />
          <Image
            src="/images/ImageThumnail.png"
            alt="image"
            width={92}
            height={92}
          />
          <Image
            src="/images/ImageThumnail.png"
            alt="image"
            width={92}
            height={92}
          />
        </div>
      </div>
      <InfomationBox title="대학 합격수기" text={detail.passNote} line={true} />
      <InfomationBox
        title="학생증"
        img="/images/ImageThumnail.png"
        line={true}
      />
      <InfomationBox
        title="요청시 제공 가능 서류"
        text={detail.document}
        line={false}
      />
    </div>
  );
};

export default TecherDetailInfo;
