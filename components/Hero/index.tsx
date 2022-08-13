import { Flex, Heading, Text } from '@chakra-ui/react';

export default function Hero({
  title,
  subtitle,
}: {
  title: string;
  subtitle: string;
}) {
  return (
    <Flex
      as="header"
      height="500px"
      bg="blue.900"
      align="center"
      justify="center"
      flexDir="column"
      gap={8}
      color="white"
    >
      <Heading fontSize="5xl" as="h1" color="white">
        {title}
      </Heading>
      <Text fontSize="xl">{subtitle}</Text>
    </Flex>
  );
}
