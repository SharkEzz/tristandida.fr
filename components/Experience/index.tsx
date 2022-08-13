import { Box, GridItem, Image, Text, VStack } from '@chakra-ui/react';
import type ExperienceType from '../../models/Experience';
import getDirectusImagePath from '../../utils/getDirectusImagePath';

export default function Experience({
  experience,
  reversed,
}: {
  experience: ExperienceType;
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
        bg={['blackAlpha.700', null, 'transparent']}
        rounded="xl"
        p={[8, null, 0]}
      >
        <VStack
          spacing={4}
          align={reversed ? 'flex-end' : 'flex-start'}
          w="full"
        >
          <Text fontSize="xl">{experience.title}</Text>
          <Box
            w="full"
            p={[0, null, 6]}
            rounded="lg"
            shadow="xl"
            bg={['transparent', null, 'gray.700']}
          >
            {experience.description}
          </Box>
          <Text variant="accent">
            {`${experience.year} - ${experience.job}`}
          </Text>{' '}
        </VStack>
      </GridItem>
      <GridItem
        display="flex"
        gridRow={1}
        gridColumn={reversed ? '1 / 7' : '7 / -1'}
        zIndex={0}
        h="500px"
        alignItems="center"
        mx="auto"
      >
        <Image src={getDirectusImagePath(experience.image.id)} rounded="xl" />
      </GridItem>
    </Box>
  );
}

Experience.defaultProps = {
  reversed: false,
};
