import { Box, Flex, Heading, Image, Text, VStack } from '@chakra-ui/react';
import type ExperienceType from '../../models/Experience';
import getDirectusImagePath from '../../utils/getDirectusImagePath';

export default function Experience({
  experience,
}: {
  experience: ExperienceType;
}) {
  return (
    <Box
      bg="gray.700"
      p={6}
      shadow="lg"
      transition="transform 0.2s, box-shadow 0.2s"
      rounded="md"
    >
      <VStack align="flex-start" spacing={6} h="full">
        <Text variant="accent">{`${experience.year} - ${experience.job}`}</Text>
        <Heading as="h3" size="lg" fontWeight="bold" color="inherit">
          {experience.title}
        </Heading>
        <Flex height="200px" align="center" justify="center" w="full">
          <Image
            src={getDirectusImagePath(experience.image.id)}
            title={experience.image.title}
            alt={experience.image.description}
            maxH="100%"
          />
        </Flex>
        <Text>{experience.description}</Text>
        <Flex flexWrap="wrap" gap={2}>
          {experience.tags.map((tech, index) => (
            <Text
              as="span"
              variant="accent"
              // eslint-disable-next-line react/no-array-index-key
              key={`tech_${tech.replaceAll(' ', '_')}_${index}`}
            >
              {tech}
              {index !== experience.tags.length - 1 && ','}
            </Text>
          ))}
        </Flex>
      </VStack>
    </Box>
  );
}
