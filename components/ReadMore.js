import styles from './ReadMore.module.css';
import utilStyles from '../styles/utils.module.css';
import Link from 'next/link';

export default function ReadMore({ data }) {
  return (
    <>
      <h2 className={utilStyles.headingLg}>Read more</h2>
      <div className={styles.container}>
        {data.map((post) => (
          <Link href={`/posts/${post.id}`}>
            <div className={styles.postContainer}>
              <a className={styles.title}>{post.title}</a>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
}
