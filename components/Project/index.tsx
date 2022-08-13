import { Box, Flex, Heading, Image, Text, VStack } from '@chakra-ui/react';
import type ProjectType from '../../models/Project';
import getDirectusImagePath from '../../utils/getDirectusImagePath';
import Link from '../Link';

export default function Project({ project }: { project: ProjectType }) {
  return (
    <Link href={project.link ?? '#'} outside={!!project.link}>
      <Box
        bg="gray.700"
        p={6}
        shadow="lg"
        _hover={{
          shadow: 'xl',
          transform: 'translateY(-5px)',
        }}
        transition="transform 0.2s, box-shadow 0.2s"
      >
        <VStack align="flex-start" spacing={6} h="full">
          <Text variant="accent">
            {`${project.year} - ${project.category.name}`}
          </Text>
          <Heading as="h3" size="lg" fontWeight="bold" color="inherit">
            {project.name}
          </Heading>
          <Image
            src={getDirectusImagePath(project.image.id, 'project-small')}
            title={project.image.title}
            alt={project.image.description}
            height={250}
            objectFit="cover"
            position="relative"
            _after={{
              bg: 'red',
              content: '""',
              height: '100%',
              left: 0,
              position: 'absolute',
              top: 0,
              width: '100%',
              zIndex: 1,
            }}
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
