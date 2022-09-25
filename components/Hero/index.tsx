import { Container, Flex, Heading, Text, VStack } from '@chakra-ui/react';

export default function Hero({ title, subtitle }: { title: string; subtitle: string }) {
  return (
    <Flex
      as="header"
      minH="400px"
      bgColor="blue.900"
      align="center"
      color="white"
      p={6}
      pt={['72px', null, null, 6]}
    >
      <Container maxW="container.lg">
        <VStack spacing={6}>
          <Heading fontSize="5xl" as="h1" color="white" textAlign="center">
            {title}
          </Heading>
          <Text fontSize="xl" textAlign="center">
            {subtitle}
          </Text>
        </VStack>
      </Container>
    </Flex>
  );
}
