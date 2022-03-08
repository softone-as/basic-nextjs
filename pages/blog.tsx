import Layout from '../components/Layout';
import styles from '../styles/Blogs.module.css';

interface Post {
  id: number;
  userId: number;
  title: string;
  body: string;
}
interface BlogProps {
  dataBlog: Post[];
}
export default function Blog(props: BlogProps) {
  const { dataBlog } = props;
  return (
    <>
      <Layout pageTitle="Blog Page">
        <h1>Blog Page</h1>
        {dataBlog.map((blog) => {
          return (
            <div key={blog.id} className={styles.card}>
              <h4>{blog.title}</h4>
              <p>{blog.body}</p>
            </div>
          );
        })}
        <h3>Advantage of NextJS</h3>
        <ol>
          <li>Basic Routing</li>
          <li>Code Spliting and Prefetching</li>
          <li>Metadata in Head components</li>
          <li>Error Page</li>
          <li>Image Optimalization</li>
          <li>Dynamic Routes</li>
        </ol>
      </Layout>
    </>
  );
}

export async function getServerSideProps() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  const dataBlog = await res.json();

  return {
    props: {
      dataBlog,
    },
  };
}
