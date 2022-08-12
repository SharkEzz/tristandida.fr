import Head from 'next/head';
import Header from '../components/Header';
import Main from '../components/Main';
import Navbar from '../components/Navbar';

export default function Home() {
  return (
    <>
      <Head>
        <title>Tristan DIDA | Portfolio</title>
      </Head>
      <Navbar />
      <Header />
      <Main />
    </>
  );
}

export async function getStaticProps() {
  // TODO: get items from directus

  return {
    props: {},
    revalidate: 86400, // each day
  };
}
