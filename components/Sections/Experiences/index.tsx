import { VStack } from '@chakra-ui/react';
import type ExperienceType from '../../../models/Experience';
import Experience from '../../Experience';
import Section from '../../Section';

export default function Experiences({
  experiences,
}: {
  experiences: ExperienceType[];
}) {
  return (
    <Section title="Experience" id="experiences" dark>
      <VStack spacing={20} align="flex-start">
        {experiences.map((experience, index) => (
          <Experience
            key={`experience_${experience.id}`}
            experience={experience}
            reversed={index % 2 === 0}
          />
        ))}
      </VStack>
    </Section>
  );
}
