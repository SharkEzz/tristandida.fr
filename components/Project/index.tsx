import { Box, Flex, Heading, Image, Text, VStack } from '@chakra-ui/react';
import type ProjectType from '../../directus/Project';
import getDirectusImagePath from '../../utils/getDirectusImagePath';
import Link from '../Link';

export default function Project({ project }: { project: ProjectType }) {
  return (
    <Link href={project.link ?? '#'} outside={!!project.link}>
      <Box
        h={620}
        bg="gray.700"
        p={6}
        shadow="lg"
        _hover={{
          transform: 'translateY(-5px)',
        }}
        transition="transform 0.2s"
      >
        <VStack align="flex-start" spacing={6} h="full" justify="space-between">
          <Text variant="accent">
            {`${project.year} - ${project.category.name}`}
          </Text>
          <Heading as="h3" size="lg" fontWeight="bold" color="inherit">
            {project.name}
          </Heading>
          <Image
            src={getDirectusImagePath(project.image.id, 'project-small')}
            height={250}
            objectFit="cover"
          />
          <Text>{project.description}</Text>
          <Flex flexWrap="wrap" gap={2}>
            {project.tags.map((tech, index) => (
              <Text
                as="span"
                variant="accent"
                // eslint-disable-next-line react/no-array-index-key
                key={`tech_${project.name.replaceAll(' ', '_')}_${index}`}
              >
                {tech}
                {index !== project.tags.length - 1 && ','}
              </Text>
            ))}
          </Flex>
        </VStack>
      </Box>
    </Link>
  );
}
