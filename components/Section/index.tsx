import { Box, Container, Heading } from '@chakra-ui/react';

export default function Section({
  id,
  title,
  dark,
  children,
}: {
  id?: string;
  dark?: boolean;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <Box py={20} id={id} bg={dark ? 'teal.800' : 'transparent'}>
      <Heading
        as="h2"
        textAlign="center"
        mb={10}
        color={dark ? 'white' : 'inherit'}
      >
        {title}
      </Heading>
      <Container maxW="container.xl" color={dark ? 'white' : 'inherit'}>
        {children}
      </Container>
    </Box>
  );
}

Section.defaultProps = {
  dark: false,
  id: undefined,
};
