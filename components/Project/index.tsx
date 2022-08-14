import {
  Box,
  Button,
  Flex,
  GridItem,
  Image,
  Text,
  VStack,
} from '@chakra-ui/react';
import { FaLink } from 'react-icons/fa';
import type ProjectType from '../../models/Project';
import getDirectusImagePath from '../../utils/getDirectusImagePath';
import Link from '../Link';

export default function Project({
  project,
  reversed,
}: {
  project: ProjectType;
  reversed?: boolean;
}) {
  return (
    <Box
      display={['flex', null, 'grid']}
      gridTemplateColumns={['1fr', null, 'repeat(12, 1fr)']}
    >
      <GridItem
        gridRow={1}
        gridColumn={reversed ? '6 / -1' : '1 / 8'}
        zIndex={1}
        display="flex"
        alignItems="center"
        bg={['blackAlpha.800', null, 'transparent']}
        rounded="xl"
        p={[8, null, 0]}
        backgroundImage={[
          `url(${getDirectusImagePath(project.image.id)})`,
          null,
          'none',
        ]}
        backgroundColor={['blackAlpha.800', null, 'transparent']}
        backgroundSize="cover"
        backgroundBlendMode="overlay"
      >
        <VStack spacing={4} align={reversed ? 'flex-end' : 'flex-start'}>
          <Text variant="accent">
            {`${project.year} - ${project.category.name}`}
          </Text>
          <Text fontSize="xl">{project.name}</Text>
          <Box
            p={[0, null, 6]}
            rounded="lg"
            shadow="xl"
            bg={['transparent', null, 'gray.700']}
          >
            {project.description}
          </Box>
          <Flex flexWrap="wrap" gap={2}>
            {project.tags.map((tag, index) => (
              <Text
                as="span"
                variant="accent"
                // eslint-disable-next-line react/no-array-index-key
                key={`tech_${tag.replaceAll(' ', '_')}_${index}`}
              >
                {tag}
                {index !== project.tags.length - 1 && ','}
              </Text>
            ))}
          </Flex>
          {project.link && (
            <Link href={project.link} outside>
              <Button variant="unstyled" rightIcon={<FaLink />}>
                GitHub link
              </Button>
            </Link>
          )}
        </VStack>
      </GridItem>
      <GridItem
        display={['none', null, 'flex']}
        gridRow={1}
        gridColumn={reversed ? '1 / 8' : '6 / -1'}
        zIndex={0}
      >
        <Image
          src={getDirectusImagePath(project.image.id, 'project-small')}
          title={project.image.title}
          alt={project.image.description}
          rounded="xl"
          objectFit="cover"
          width="100%"
          loading="lazy"
          shadow="md"
        />
      </GridItem>
    </Box>
  );
}

Project.defaultProps = {
  reversed: false,
};
