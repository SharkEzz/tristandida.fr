import { Box, chakra, Container, Divider, Heading, useColorModeValue } from '@chakra-ui/react';
import { motion } from 'framer-motion';

const MotionBox = chakra(motion.section);

export default function Section({
  id,
  title,
  children,
}: {
  id?: string;
  title?: string;
  children: React.ReactNode;
}) {
  const bg = useColorModeValue('white', undefined);
  const color = useColorModeValue('inherit', 'white');

  return (
    <MotionBox
      pb={16}
      bg={bg}
      color={color}
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition="0.2s"
      viewport={{ amount: 0.09, once: true }}
      position={id ? 'relative' : undefined}
    >
      <Container maxW="container.xl" pb={16}>
        <Divider w="full" mx="auto" borderColor="blackAlpha.300" />
      </Container>
      {id && <Box id={id} position="absolute" top="-81px" />}
      {title && (
        <Heading as="h2" textAlign="center" color={color} mb={10}>
          {title}
        </Heading>
      )}
      <Container maxW="container.xl">{children}</Container>
    </MotionBox>
  );
}

Section.defaultProps = {
  id: undefined,
  title: undefined,
};
