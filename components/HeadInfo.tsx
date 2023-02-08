import Head from 'next/head';

type HeadInfomation = {
  title: string;
};

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
