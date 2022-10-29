import { Box, useColorModeValue, VStack } from '@chakra-ui/react';
import Section from '../../Section';
import type ExperienceType from '../../../models/Experience';
import Experience from '../../Experience';

export default function Experiences({ experiences }: { experiences: ExperienceType[] }) {
  const bg = useColorModeValue('gradient', 'darkGradient');

  return (
    <Box bg={bg}>
      <Section id="experiences" title="Experiences">
        <VStack spacing={10} align="flex-start">
          {experiences.map((experience) => (
            <Experience key={`experience_${experience.id}`} experience={experience} />
          ))}
        </VStack>
      </Section>
    </Box>
  );
}
