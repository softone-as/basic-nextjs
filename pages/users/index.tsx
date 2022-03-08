import { useRouter } from 'next/router';
import Layout from '../../components/Layout';
import styles from '../../styles/Users.module.css';

interface UserProps {
  dataUsers: Array<any>;
}
export default function Users(props: UserProps) {
  const { dataUsers } = props;
  const router = useRouter();
  return (
    <>
      <Layout pageTitle="User Page">
        <h1>Users Page</h1>
        {dataUsers.map((users) => (
          <div
            className={styles.card}
            key={users.id}
            onClick={() => {
              router.push(`/users/${users.id}`);
            }}
          >
            <p>{users.name}</p>
            <p>{users.email}</p>
          </div>
        ))}
        <h1>getStaticProps</h1>
        <p>
          not used for Dynamic Props, but it have advantages for calling data
          API first before content loaded
        </p>
      </Layout>
    </>
  );
}

export async function getStaticProps() {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  const dataUsers = await res.json();
  return {
    props: {
      dataUsers,
    },
  };
}
