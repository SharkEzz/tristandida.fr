import { Grid, GridItem, Image, Text, VStack } from '@chakra-ui/react';
import Section from '../../Section';

export default function AboutMe() {
  return (
    <Section id="a-propos" title="A propos">
      <Grid templateColumns={['1fr', null, '2fr 1fr']} gap="4rem">
        <GridItem alignSelf="center">
          <VStack spacing={10} align="flex-start" justify="center">
            <Text fontSize="lg" textAlign="justify">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Id
              eveniet enim vel, reiciendis ipsum voluptatibus, laboriosam.
            </Text>
            <Text fontSize="lg" textAlign="justify">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Id
              eveniet enim vel, reiciendis ipsum voluptatibus, laboriosam. Lorem
              ipsum dolor sit amet consectetur adipisicing elit. Id eveniet enim
              vel, reiciendis ipsum voluptatibus, laboriosam.
            </Text>
            <Text fontSize="lg" textAlign="justify">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Id
              eveniet enim vel, reiciendis ipsum voluptatibus, laboriosam.
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
