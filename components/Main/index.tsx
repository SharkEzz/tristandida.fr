import { Box } from '@chakra-ui/react';
import AboutMe from '../Sections/AboutMe';
import Projects from '../Sections/Projects';
import Skills from '../Sections/Skills';

export default function Main() {
  return (
    <Box as="main">
      <AboutMe />
      <Projects />
      <Skills />
    </Box>
  );
}
