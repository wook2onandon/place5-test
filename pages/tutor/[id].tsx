import HeadInfo from '@/components/HeadInfo';
import TeacherDetail from '@/components/TeacherDetail';
import TeacherInfo from '@/components/TeacherInfo';
import { useRouter } from 'next/router';
import styles from '../../styles/[id].module.css';

type teachInfoWrapType = {
  data: teacherInfoType;
  detail: teacherDetailType;
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

const tutor = ({ data, detail }: teachInfoWrapType) => {
  const router = useRouter();
  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <HeadInfo title="김과외 | 선생님찾기" />
      <div className={styles.container}>
        <TeacherInfo data={data} />
        <TeacherDetail detail={detail} data={data} />
      </div>
    </>
  );
};

export async function getServerSideProps(context: any) {
  const { id } = context.query;
  const [dataRes, detailRes] = await Promise.all([
    fetch(`http://61.97.189.192:8089/user/getuser?userId=${id}`),
    fetch(`http://61.97.189.192:8089/user/getuserinfo?userId=${id}`),
  ]);
  const [data, detail] = await Promise.all([dataRes.json(), detailRes.json()]);
  if (data.userId === undefined || detail.userId === undefined) {
    // <- Data Fetching Error Handling
    return {
      notFound: true,
    };
  } else {
    return { props: { data, detail } };
  }
}

export default tutor;
