import { Box, Button, Container, Flex, Heading, Text, useColorModeValue } from '@chakra-ui/react';
import { FaArrowDown } from 'react-icons/fa';
import type HeaderType from '../../models/Header';
import Link from '../Link';

const styles = {
  '.content': {
    animation: 'pageLoad 1.2s',
    animationDelay: '0.3s',
    animationFillMode: 'both',
  },
  '@keyframes backgroundGradient': {
    '0%': {
      backgroundPosition: '0% 51%',
    },
    '50%': {
      backgroundPosition: '100% 50%',
    },
    '100%': {
      backgroundPosition: '0% 51%',
    },
  },
  '@keyframes pageLoad': {
    from: {
      opacity: 0,
      transform: 'translateY(-50px)',
    },
    to: {
      opacity: 1,
      transform: 'translateY(0)',
    },
  },
};

export default function Header({ header }: { header: HeaderType }) {
  const bg = useColorModeValue('gradient', 'darkGradient');
  const color = useColorModeValue('inherit', 'white');

  return (
    <Box
      display="flex"
      minH="1050px"
      alignItems="center"
      bg={bg}
      animation="backgroundGradient 20s ease infinite both"
      bgSize="300% 300%"
      sx={styles}
      color={color}
    >
      <Container maxW="container.xl">
        <Flex align="flex-start" flexDir="column" gap={6} className="content">
          <Text variant="accent" fontSize="xl">
            {header.prefix}
          </Text>
          <Heading as="h1" fontSize={['4xl', '5xl', null, '7xl']} color={color}>
            {header.main_title}
          </Heading>
          <Heading as="p" fontSize={['4xl', '5xl', null, '7xl']} mb={[0, 8]} color={color}>
            {header.subtitle}
          </Heading>
          <Link href="#whoami">
            <Button
              variant="outline"
              colorScheme="blue"
              _hover={{ bg: 'transparent' }}
              _active={{ bg: 'transparent' }}
              rightIcon={<FaArrowDown />}
            >
              Get started!
            </Button>
          </Link>
        </Flex>
      </Container>
    </Box>
  );
}
