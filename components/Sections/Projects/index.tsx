import { Flex, Text, VStack } from '@chakra-ui/react';
import type ProjectType from '../../../models/Project';
import Link from '../../Link';
import Project from '../../Project';
import Section from '../../Section';

export default function Projects({ projects }: { projects: ProjectType[] }) {
  return (
    <Section title="Projects" id="projects" dark>
      <VStack spacing={20} align="flex-start">
        {projects.map((project, index) => (
          <Project
            key={`experience_${project.id}`}
            project={project}
            reversed={index % 2 === 0}
          />
        ))}
      </VStack>
      <Flex justify="center">
        <Link href="https://github.com/SharkEzz" variant="hover" outside>
          <Text fontSize="lg" mt={16}>
            Want to see more ? Take a look at my GitHub !
          </Text>
        </Link>
      </Flex>
    </Section>
  );
}
