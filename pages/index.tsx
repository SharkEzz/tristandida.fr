import { Box } from '@chakra-ui/react';
import { NextSeo } from 'next-seo';
import Header from '../components/Header';
import PageLayout from '../components/PageLayout';
import AboutMe from '../components/Sections/AboutMe';
import Experiences from '../components/Sections/Experiences';
import Projects from '../components/Sections/Projects';
import Skills from '../components/Sections/Skills';
import type DirectusCollections from '../models';
import getDirectus from '../utils/getDirectus';

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
    <PageLayout>
      <NextSeo title="Tristan DIDA | Portfolio" description="Tristan DIDA's portfolio" />
      <Header header={header} />
      <Box as="main">
        <AboutMe aboutMe={aboutMe} />
        <Projects projects={projects} />
        <Skills />
        <Experiences experiences={experiences} />
      </Box>
    </PageLayout>
  );
}

export async function getStaticProps() {
  const directus = getDirectus();

  const header = await directus.singleton('header').read();
  const aboutMe = await directus.singleton('about_me').read({
    fields: ['content', 'image.title', 'image.id', 'image.description'],
  });
  const projects = await directus.items('projects').readByQuery({
    fields: ['*', 'image.title', 'image.id', 'image.description'],
    sort: ['-created_at'],
  });
  const experiences = await directus.items('experience').readByQuery({
    fields: ['*', 'image.title', 'image.id', 'image.description'],
    sort: ['-from'],
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
