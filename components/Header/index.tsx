import { Button, Container, Flex, Heading, Text } from '@chakra-ui/react';
import styled from '@emotion/styled';
import { FaArrowDown } from 'react-icons/fa';
import Link from '../Link';

const CustomFlex = styled.header`
  display: flex;
  height: 100vh;
  align-items: center;
  margin-top: -65px;
  color: white;

  background: linear-gradient(320deg, #341952, #194e45, #1c277d);
  background-size: 600% 600%;

  animation: AnimationName 14s ease infinite both;

  @keyframes AnimationName {
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

export default function Header() {
  return (
    <CustomFlex>
      <Container maxW="container.xl">
        <Flex align="flex-start" flexDir="column" gap={6}>
          <Heading fontSize={['4xl', '7xl']} color="inherit">
            Tristan DIDA.
          </Heading>
          <Heading fontSize={['4xl', '7xl']} variant="muted" mb={[0, 8]}>
            Développeur web full-stack.
          </Heading>
          <Text fontSize="lg">
            Bienvenue sur mon site, celui-ci est actuellement en cours de mise à
            jour !
          </Text>
          <Link href="#a-propos">
            <Button colorScheme="teal" rightIcon={<FaArrowDown />}>
              En savoir plus
            </Button>
          </Link>
        </Flex>
      </Container>
    </CustomFlex>
  );
}
