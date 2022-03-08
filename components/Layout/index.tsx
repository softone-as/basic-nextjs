import Head from 'next/head';
import { ReactNode } from 'react';
import Footer from '../Footer';
import Header from '../Header';
import styles from './Layout.module.css';

interface LayoutProps {
  children: ReactNode;
  pageTitle: string;
}

export default function Layout(props: LayoutProps) {
  const { children, pageTitle } = props;
  return (
    <div className={styles.container}>
      <Head>
        <title>NextJS Basic | {pageTitle}</title>
        <meta name="description" content="Website NextJS Basic" />
      </Head>
      <Header />
      <div className={styles.content}>{children}</div>
      <Footer />
    </div>
  );
}
