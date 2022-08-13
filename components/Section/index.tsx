import { chakra, Container, Heading } from '@chakra-ui/react';
import { isValidMotionProp, motion } from 'framer-motion';

const MotionBox = chakra(motion.section, {
  shouldForwardProp: (prop) =>
    isValidMotionProp(prop) || prop === 'children' || prop === 'id',
});

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
    <MotionBox
      py={20}
      id={id}
      bg={dark ? 'teal.800' : 'transparent'}
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition="0.2s"
      viewport={{ amount: 0.5, once: true }}
    >
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
    </MotionBox>
  );
}

Section.defaultProps = {
  dark: false,
  id: undefined,
};
