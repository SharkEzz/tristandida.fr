import {
  Box,
  Button,
  Flex,
  GridItem,
  Image,
  Text,
  VStack,
} from '@chakra-ui/react';
import { FaArrowsAlt, FaLink, FaOutdent } from 'react-icons/fa';
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
      w="full"
      position="relative"
      alignItems="center"
    >
      <GridItem
        gridRow={1}
        gridColumn={reversed ? '6 / -1' : '1 / 8'}
        zIndex={1}
        display="flex"
        alignItems="center"
        h="full"
        position={['absolute', null, 'static']}
        width={['full', null, 'auto']}
        bg={['blackAlpha.800', null, 'transparent']}
        rounded="xl"
        p={[8, null, 0]}
      >
        <VStack
          spacing={4}
          align={reversed ? 'flex-end' : 'flex-start'}
          w="full"
        >
          <Text variant="accent">
            {`${project.year} - ${project.category.name}`}
          </Text>
          <Text fontSize="xl">{project.name}</Text>
          <Box
            w="full"
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
                See more
              </Button>
            </Link>
          )}
        </VStack>
      </GridItem>
      <GridItem
        display="flex"
        gridRow={1}
        gridColumn={reversed ? '1 / 8' : '6 / -1'}
        zIndex={0}
        w="full"
      >
        <Image
          src={getDirectusImagePath(project.image.id)}
          rounded="xl"
          width="100%"
        />
      </GridItem>
    </Box>
  );
}

Project.defaultProps = {
  reversed: false,
};
