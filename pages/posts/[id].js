import Layout from '../../components/Layout';
import ReadMore from '../../components/ReadMore';
import {
  getAllPostIds,
  getPostData,
  getFilteredPostsData,
} from '../../lib/posts';
import Head from 'next/head';

import utilStyles from '../../styles/utils.module.css';

export default function Post({ postData, filteredPostsData }) {
  return (
    <Layout>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <article>
        <h1 className={utilStyles.headingXl}>{postData.title}</h1>

        <div>{postData.body}</div>
      </article>

      <ReadMore data={filteredPostsData} />
    </Layout>
  );
}

export async function getStaticPaths() {
  const resp = await getAllPostIds();

  const paths = resp.map((id) => ({
    params: { id: id },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id);
  const filteredPostsData = await getFilteredPostsData(parseInt(params.id));

  return {
    props: {
      postData,
      filteredPostsData,
    },
  };
}
