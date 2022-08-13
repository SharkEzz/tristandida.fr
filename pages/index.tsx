import { Box } from '@chakra-ui/react';
import { Directus } from '@directus/sdk';
import Head from 'next/head';
import Header from '../components/Header';
import Navbar from '../components/Navbar';
import AboutMe from '../components/Sections/AboutMe';
import Experiences from '../components/Sections/Experiences';
import Projects from '../components/Sections/Projects';
import Skills from '../components/Sections/Skills';
import type DirectusCollections from '../models';

export default function Home({
  header,
  aboutMe,
  projects,
  experiences,
}: {
  header: DirectusCollections['header'];
  aboutMe: DirectusCollections['about_me'];
  projects: DirectusCollections['projects'][];
  experiences: DirectusCollections['experience'][];
}) {
  return (
    <>
      <Head>
        <title>Tristan DIDA | Portfolio</title>
        <meta name="description" content="Tristan DIDA's portfolio" />
      </Head>
      <Navbar />
      <Header header={header} />
      <Box as="main">
        <AboutMe aboutMe={aboutMe} />
        <Projects projects={projects} />
        <Skills />
        <Experiences experiences={experiences} />
      </Box>
    </>
  );
}

export async function getStaticProps() {
  const directus = new Directus<DirectusCollections>(
    process.env.NEXT_PUBLIC_DIRECTUS_URL ?? '',
  );

  const header = await directus.singleton('header').read();
  const aboutMe = await directus.singleton('about_me').read({
    fields: ['content', 'image.title', 'image.id', 'image.description'],
  });
  const projects = await directus.items('projects').readByQuery({
    fields: [
      '*',
      'category.name',
      'image.title',
      'image.id',
      'image.description',
    ],
  });
  const experiences = await directus.items('experience').readByQuery({
    fields: ['*', 'image.title', 'image.id', 'image.description'],
  });

  return {
    props: {
      aboutMe,
      experiences: experiences.data,
      header,
      projects: projects.data,
    },
    revalidate: 86400, // each day
  };
}
