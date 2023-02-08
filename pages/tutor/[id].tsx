import HeadInfo from '@/components/HeadInfo';
import { useRouter } from 'next/router';

type teachInfoPostsType = {
  posts: teacherInfoType;
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

const tutor = ({ posts }: teachInfoPostsType) => {
  const router = useRouter();
  const { id } = router.query;
  console.log(id);
  if (router.isFallback) {
    return <div>Loading...</div>;
  }
  return (
    <>
      <HeadInfo title="김과외 | 선생님찾기" />
      <div>Tutor</div>
    </>
  );
};

export const getSeverSideProps = async () => {
  const res = await fetch(
    `http://61.97.189.192:8089/user/getuser?userId=kimtest`,
  );
  const posts = await res.json();
  return {
    posts,
  };
};

export default tutor;
