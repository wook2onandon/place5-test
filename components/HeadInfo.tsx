import Head from 'next/head';

type HeadInfomation = {
  title: string;
};

//Head태그의 title을 page별로 변경해줄 수 있는 component
const HeadInfo = ({ title }: HeadInfomation) => {
  return (
    <Head>
      <title>{title}</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
  );
};

HeadInfo.defaultProps = {
  title: '김과외',
};

export default HeadInfo;
