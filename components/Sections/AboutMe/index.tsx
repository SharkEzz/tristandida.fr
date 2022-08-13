import { Grid, GridItem, Image, Text, VStack } from '@chakra-ui/react';
import Section from '../../Section';

export default function AboutMe() {
  return (
    <Section id="about" title="Who am I?">
      <Grid templateColumns={['1fr', null, '2fr 1fr']} gap="4rem">
        <GridItem alignSelf="center">
          <VStack spacing={10} align="flex-start" justify="center">
            <Text fontSize="lg" textAlign="justify">
              Hi ! My name is Tristan DIDA, I&apos;m 22 and I develop things on
              my free time. Mostly, my work focus on web development but also
              some system stuff. A lot of my work is available in the projects
              section of this website, so make sure to check it out!
            </Text>
            <Text fontSize="lg" textAlign="justify">
              In August 2021, I graduated with a professional license WIMSI,
              issued by the IUT of Reims, which I did in apprenticeship. Before
              that, I got a bac STI2D (option SIN), before moving on to a BTS
              SIO (Computer services to organizations) option SLAM.
            </Text>
            <Text fontSize="lg" textAlign="justify">
              Since the end of my studies, I have been on a permanent contract
              at KOUL, a web development company based in Reims.
            </Text>
          </VStack>
        </GridItem>
        <GridItem justifySelf="center">
          <Image
            src="https://picsum.photos/seed/picsum/380/380"
            borderRadius="full"
            boxSize={['250px', null, null, null, '380px']}
            boxShadow="dark-lg"
          />
        </GridItem>
      </Grid>
    </Section>
  );
}
