import { Box } from '@chakra-ui/react';
import { Directus } from '@directus/sdk';
import Head from 'next/head';
import Header from '../components/Header';
import Navbar from '../components/Navbar';
import AboutMe from '../components/Sections/AboutMe';
import Projects from '../components/Sections/Projects';
import Skills from '../components/Sections/Skills';
import type DirectusCollections from '../directus';

export default function Home({
  header,
  aboutMe,
}: {
  header: DirectusCollections['header'];
  aboutMe: DirectusCollections['about_me'];
}) {
  return (
    <>
      <Head>
        <title>Tristan DIDA | Portfolio</title>
      </Head>
      <Navbar />
      <Header header={header} />
      <Box as="main">
        <AboutMe aboutMe={aboutMe} />
        <Projects />
        <Skills />
      </Box>
    </>
  );
}

export async function getStaticProps() {
  const directus = new Directus<DirectusCollections>(
    process.env.NEXT_PUBLIC_DIRECTUS_URL ?? '',
  );

  const header = await directus.singleton('header').read();
  const aboutMe = await directus.singleton('about_me').read();

  return {
    props: {
      aboutMe,
      header,
    },
    revalidate: 86400, // each day
  };
}
