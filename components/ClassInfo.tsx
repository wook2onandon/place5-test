import Image from 'next/image';
import styles from '../styles/ClassInfo.module.css';
import InfomationBox from './InfomationBox';

type teacherDetailWrap = {
  detail: teacherDetailType;
};

type teacherDetailType = {
  userId: string; // 유저 id
  method: string; // 과외 방식
  specialSubjects: string[]; // 전문과목 리스트
  subjects: string[]; // 과외 가능 전체과목 리스트
  minimumPay: number; // 최소 수업료
  detailPay: string; // 자세한 수업료 기준
  schedule: string; // 수업 가능 일정
  demo: string; // 시범과외
  area: string[]; // 수업 가능 지역
  lessonDescription: string; // 수업 한줄 소개
  lessonMethod: string; // 수업 방식
  lessonOnlineMethod: string; // 화상과외 수업 방식
  lessonContent: string; // 과목별 수업 내용
  difference: string; // 차별점
  appeal: string;
};

const ClassInfo = ({ detail }: teacherDetailWrap) => {
  return (
    <article className={styles.container}>
      <div className={styles.videoWrap}>
        <div className={styles.videoTitleWrap}>
          <h3 className={styles.videoTitle}>영상 소개</h3>
          <Image
            src="/images/info_line.png"
            alt="logo"
            width={20}
            height={20}
          />
        </div>
        <Image
          src="/images/videoThumnail.png"
          alt="logo"
          width={92}
          height={92}
        />
      </div>
      <InfomationBox title="과외방식" text={detail.method} line={true} />
      <div className={styles.itemContainer}>
        <h3 className={styles.itemTitle}>과목</h3>
        <div className={styles.itemDetailWrap}>
          <h4 className={styles.itemDetailTitle}>전문 과목</h4>
          <div className={styles.itemDetail}>
            {detail.specialSubjects && detail.specialSubjects.join(', ')}
          </div>
        </div>
        <div className={styles.itemDetailWrap}>
          <h4 className={styles.itemDetailTitle}>전체 과목</h4>
          <div className={styles.itemDetail}>
            {detail.subjects && detail.subjects.join(', ')}
          </div>
        </div>
      </div>
      <div className={styles.itemContainer}>
        <h3 className={styles.itemTitle}>수업료 기준</h3>
        <div className={styles.itemDetailWrap}>
          <h4 className={styles.itemDetailTitle}>최소 수업료</h4>
          <div className={styles.itemDetail}>{detail.minimumPay}</div>
        </div>
        <div className={styles.itemDetailWrap}>
          <h4 className={styles.itemDetailTitle}>자세한 기준</h4>
          <div className={styles.itemDetail}>{detail.detailPay}</div>
        </div>
      </div>
      <div className={styles.itemContainer}>
        <h3 className={styles.itemTitle}>수업 가능 일정</h3>
        {detail.schedule && detail.schedule.includes('/') ? (
          detail.schedule.split('/').map((schedule, idx) => (
            <p
              key={idx}
              className={`${styles.itemDetail} ${styles.itemMargin}`}
            >
              {schedule}
            </p>
          ))
        ) : (
          <p className={styles.itemDetail}>schedule</p>
        )}
      </div>
      <InfomationBox title="시범 과외" text={detail.demo} line={true} />
      <InfomationBox
        title="수업 가능 지역"
        text={detail.area && detail.area.join(', ')}
        line={true}
      />
      <InfomationBox
        title="수업 한줄 소개"
        text={detail.lessonDescription}
        line={true}
      />
      <InfomationBox title="수업 방식" text={detail.lessonMethod} line={true} />
      <InfomationBox
        title="화상과외 수업 방식"
        text={detail.lessonOnlineMethod}
        line={true}
      />
      <InfomationBox
        title="과목별 수업 내용"
        text={detail.lessonContent}
        line={true}
      />
      <InfomationBox title="차별점" text={detail.difference} line={true} />
      <InfomationBox title="어필" text={detail.appeal} line={false} />
    </article>
  );
};

export default ClassInfo;
