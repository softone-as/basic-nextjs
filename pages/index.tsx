import Image from 'next/image';
import Layout from '../components/Layout';

export default function Home() {
  return (
    <>
      <Layout pageTitle="Home Page">
        <Image src="/favicon.ico" width={200} height={200} alt="profile" />
        <h1>Welcome Brother</h1>
        <p>Optimalisasi gambar components Image dari Next JS </p>
        <ol>
          <li>Compress size</li>
          <li>Lazy load, just load when image is appear on the screen</li>
        </ol>
      </Layout>
    </>
  );
}
