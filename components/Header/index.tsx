import { Button, Container, Flex, Heading, Text } from '@chakra-ui/react';
import styled from '@emotion/styled';
import { FaArrowDown } from 'react-icons/fa';
import type HeaderType from '../../models/Header';
import Link from '../Link';

const CustomFlex = styled.header`
  display: flex;
  height: 100vh;
  align-items: center;
  color: white;

  background: linear-gradient(300deg, #341952, #194e45, #1c277d);
  background-size: 600% 600%;

  animation: backgroundGradient 20s ease infinite both;

  .content {
    animation: pageLoad 1.2s;
    animation-delay: 0.3s;
    animation-fill-mode: both;
  }

  @keyframes pageLoad {
    from {
      opacity: 0;
      transform: translateY(-50px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @keyframes backgroundGradient {
    0% {
      background-position: 0% 51%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 51%;
    }
  }
`;

export default function Header({ header }: { header: HeaderType }) {
  return (
    <CustomFlex>
      <Container maxW="container.xl">
        <Flex
          align="flex-start"
          flexDir="column"
          gap={6}
          p={6}
          className="content"
        >
          <Text variant="accent" fontSize="xl">
            {header.prefix}
          </Text>
          <Heading as="h1" fontSize={['4xl', '7xl']} color="inherit">
            {header.main_title}
          </Heading>
          <Heading as="p" fontSize={['4xl', '7xl']} variant="muted" mb={[0, 8]}>
            {header.subtitle}
          </Heading>
          <Link href="#whoami">
            <Button
              variant="outline"
              _hover={{ bg: 'transparent' }}
              _active={{ bg: 'transparent' }}
              rightIcon={<FaArrowDown />}
            >
              Get started!
            </Button>
          </Link>
        </Flex>
      </Container>
    </CustomFlex>
  );
}
