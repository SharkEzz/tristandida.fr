import { Box, Flex, Heading, HStack, Image, Text, VStack } from '@chakra-ui/react';
import TimelineIcon from '../../assets/icons/TimelineIcon';
import type ExperienceType from '../../models/Experience';
import formatDate from '../../utils/formatDate';
import getDirectusImagePath from '../../utils/getDirectusImagePath';

export default function Experience({ experience }: { experience: ExperienceType }) {
  return (
    <HStack
      w="full"
      align="flex-start"
      flexDir={['column', null, 'row']}
      position="relative"
      _before={{
        bg: 'blue.400',
        content: "''",
        display: ['none', null, 'block'],
        height: 'calc(100% + 8px)',
        left: 5,
        position: 'absolute',
        top: 10,
        width: '2px',
      }}
    >
      <TimelineIcon position="absolute" display={['none', null, 'block']} top={2} left="5px" fill="blue.400" />
      <Box flex={1}>
        <VStack pl={[0, null, 10]} align="flex-start" position="relative">
          <Heading as="h3" size="lg" color="inherit">
            {experience.title}
          </Heading>
          <Text as="span" variant="accent">{`${formatDate(experience.from)} - ${
            experience.to ? formatDate(experience.to) : 'now'
          }`}</Text>
          <Text variant="accent">{experience.job}</Text>
        </VStack>
      </Box>
      <VStack flex={2} align="flex-start" spacing={10}>
        <Text>{experience.description}</Text>
        <Image
          alignSelf="center"
          src={getDirectusImagePath(experience.image.id, 'experience')}
          title={experience.image.title}
          alt={experience.image.description}
          loading="lazy"
        />
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
    </HStack>
  );
}
