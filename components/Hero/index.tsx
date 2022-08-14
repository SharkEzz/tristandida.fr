import { Box, Flex, Heading, Text } from '@chakra-ui/react';

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
      position="relative"
      mb={16}
    >
      <Heading fontSize="5xl" as="h1" color="white" textAlign="center" mt={16}>
        {title}
      </Heading>
      <Text fontSize="xl" textAlign="center">
        {subtitle}
      </Text>
      <Box
        height="8vw"
        bg="blue.900"
        width="120%"
        position="absolute"
        bottom="-3vw"
        left="-15px"
        transform="rotate(-4deg)"
      />
    </Flex>
  );
}
