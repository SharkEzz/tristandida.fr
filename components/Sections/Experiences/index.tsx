import { SimpleGrid } from '@chakra-ui/react';
import Section from '../../Section';
import type ExperienceType from '../../../models/Experience';
import Experience from '../../Experience';

export default function Experiences({
  experiences,
}: {
  experiences: ExperienceType[];
}) {
  return (
    <Section id="experiences" title="Experiences" dark>
      <SimpleGrid spacing={16} columns={[1, null, 2, 3]}>
        {experiences.map((experience) => (
          <Experience
            key={`experience_${experience.id}`}
            experience={experience}
          />
        ))}
      </SimpleGrid>
    </Section>
  );
}
