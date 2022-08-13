import { VStack } from '@chakra-ui/react';
import type ProjectType from '../../../models/Project';
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
    </Section>
  );
}
