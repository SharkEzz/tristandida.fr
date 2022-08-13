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
      bgColor="blue.900"
      justify="center"
      flexDir="column"
      gap={8}
      p={8}
      color="white"
    >
      <Heading fontSize="5xl" as="h1" color="white" textAlign="center">
        {title}
      </Heading>
      <Text fontSize="xl" textAlign="center">
        {subtitle}
      </Text>
    </Flex>
  );
}
