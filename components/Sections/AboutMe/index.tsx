import { Box, Grid, GridItem, Image } from '@chakra-ui/react';
import type AboutMeType from '../../../models/AboutMe';
import getDirectusImagePath from '../../../utils/getDirectusImagePath';
import Section from '../../Section';

export default function AboutMe({ aboutMe }: { aboutMe: AboutMeType }) {
  return (
    <Section id="whoami" title="Who am I?">
      <Grid templateColumns={['1fr', null, '2fr 1fr']} gap="4rem">
        <GridItem alignSelf="center">
          <Box
            dangerouslySetInnerHTML={{ __html: aboutMe.content }}
            display="flex"
            flexDirection="column"
            gap={8}
          />
        </GridItem>
        <GridItem justifySelf="center">
          <Image
            src={getDirectusImagePath(aboutMe.image.id, 'medium')}
            title={aboutMe.image.title}
            alt={aboutMe.image.description}
            borderRadius="full"
            boxSize={['250px', null, null, null, '380px']}
            boxShadow="dark-lg"
            objectFit="cover"
          />
        </GridItem>
      </Grid>
    </Section>
  );
}
