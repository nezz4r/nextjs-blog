import Layout from '../../components/Layout';
import {
  getAllPostIds,
  getPostData,
  getFilteredPostsData,
} from '../../lib/posts';
import Head from 'next/head';

import utilStyles from '../../styles/utils.module.css';

export default function Post({ postData }) {
  return (
    <Layout>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <article>
        <h1 className={utilStyles.headingXl}>{postData.title}</h1>

        <div dangerouslySetInnerHTML={{ __html: postData.body }} />
      </article>
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
  const filteredPostsData = await getFilteredPostsData(params.id);

  return {
    props: {
      postData,
      filteredPostsData,
    },
  };
}
