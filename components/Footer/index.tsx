import { Box, Container, HStack, Tag } from '@chakra-ui/react';

export default function Footer() {
  return (
    <Box as="footer" py={8} fontSize="sm">
      <Container maxW="container.xl">
        <HStack justify="space-between">
          <Box>© {new Date().getFullYear()} Tristan DIDA</Box>
          <Box>
            Version : <Tag>{process.env.NEXT_PUBLIC_APP_VERSION}</Tag>
          </Box>
        </HStack>
      </Container>
    </Box>
  );
}
