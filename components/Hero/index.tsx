import { Container, Flex, Heading, Text, useColorModeValue, VStack } from '@chakra-ui/react';

export default function Hero({ title, subtitle }: { title: string; subtitle: string }) {
  const bg = useColorModeValue('gradient', 'darkGradient');
  const color = useColorModeValue('inherit', 'white');

  return (
    <Flex as="header" minH="450px" color={color} bg={bg} align="center" p={6} pt={['82px', null, null, 24]}>
      <Container maxW="container.lg">
        <VStack spacing={6}>
          <Heading fontSize="5xl" as="h1" textAlign="center" color="inherit">
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
