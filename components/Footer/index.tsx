import { Box, Text } from '@chakra-ui/react';
import Section from '../Section';

export default function Footer() {
  return (
    <Box as="footer">
      <Section dark>
        <Text fontSize="lg" textAlign="right">
          © 2022 Tristan DIDA
        </Text>
      </Section>
    </Box>
  );
}
