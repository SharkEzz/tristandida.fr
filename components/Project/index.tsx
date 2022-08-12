import { Box, Heading, HStack, Image, Text, VStack } from '@chakra-ui/react';
import Link from '../Link';

type ProjectType = {
  year: number;
  title: string;
  description: string;
  technologies: string[];
  link: string;
  image: string;
  category: string;
};

export default function Project({ project }: { project: ProjectType }) {
  return (
    <Link href={project.link}>
      <Box
        bg="gray.700"
        p={6}
        shadow="lg"
        _hover={{
          transform: 'translateY(-5px)',
        }}
        transition="transform 0.2s"
      >
        <VStack align="flex-start" spacing={6}>
          <Text variant="accent">
            {project.year} - {project.category}
          </Text>
          <Heading as="h3" size="lg" fontWeight="bold" color="inherit">
            {project.title}
          </Heading>
          <Image src="https://picsum.photos/400/300" width="100%" />
          <Text>{project.description}</Text>
          <HStack>
            {project.technologies.map((tech, index) => (
              <Text
                as="span"
                variant="accent"
                // eslint-disable-next-line react/no-array-index-key
                key={`tech_${project.title.replaceAll(' ', '_')}_${index}`}
              >
                {tech}
              </Text>
            ))}
          </HStack>
        </VStack>
      </Box>
    </Link>
  );
}
