import { SimpleGrid } from '@chakra-ui/react';
import type ProjectType from '../../../directus/Project';
import Section from '../../Section';
import Project from '../../Project';

export default function Projects({ projects }: { projects: ProjectType[] }) {
  return (
    <Section id="projects" title="Projects" dark>
      <SimpleGrid spacing={16} columns={[1, null, 2]}>
        {projects.map((project) => (
          <Project key={`project_${project.id}`} project={project} />
        ))}
      </SimpleGrid>
    </Section>
  );
}
