import { useState } from 'react';
import ClassInfo from './ClassInfo';
import TeacherDetailInfo from './TeacherDetailInfo';
import styles from '../styles/TeacherDetail.module.css';

type teacherDetailWrap = {
  detail: teacherDetailType;
  data: teacherCertified;
};

type teacherCertified = {
  isCertified: boolean;
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
  appeal: string; // 어필
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

//teacher detail의 menu
const TeacherDetailMenu = [
  '수업 안내',
  '선생님 정보',
  '평판/후기',
  '김과외 경력',
  '기타 경력',
];

const TeacherDetail = ({ detail, data }: teacherDetailWrap) => {
  const [tabNum, setTabNum] = useState<Number>(0);

  //teacher detail의 menu를 클릭시 index값을 가져오는 function
  const handleTabNum = (idx: number) => {
    setTabNum(idx);
  };

  return (
    <div className={styles.container}>
      <div className={styles.wrap}>
        <ul className={styles.menuWrap}>
          {TeacherDetailMenu.map((menu, idx) => (
            <li
              key={idx}
              onClick={() => handleTabNum(idx)}
              className={`${styles.menu} ${tabNum === idx && styles.on}`}
            >
              {menu}
            </li>
          ))}
        </ul>
        {tabNum === 0 && <ClassInfo detail={detail} />}
        {tabNum === 1 && <TeacherDetailInfo detail={detail} data={data} />}
      </div>
    </div>
  );
};

export default TeacherDetail;
