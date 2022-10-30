import {
  Box,
  Button,
  Container,
  Flex,
  Icon,
  IconButton,
  Text,
  useBreakpointValue,
  useColorMode,
  useColorModeValue,
} from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { FaEnvelope, FaGithub, FaLightbulb, FaLinkedin, FaMoon, FaToggleOn } from 'react-icons/fa';
import Link from '../Link';

export default function Navbar() {
  const [isVisible, setIsVisible] = useState(true);
  const { colorMode, toggleColorMode } = useColorMode();

  const isDesktop = useBreakpointValue({ base: false, md: true });

  useEffect(() => {
    if (!isDesktop) {
      setIsVisible(false);
    }
  }, [isDesktop]);

  const display = useBreakpointValue({
    base: isVisible ? 'flex' : 'none',
    lg: 'flex',
  });

  const bg = useColorModeValue('whiteAlpha.700', 'blackAlpha.600');
  const color = useColorModeValue('black', 'white');

  return (
    <Box
      as="nav"
      position="fixed"
      top={0}
      left={0}
      color={color}
      w="full"
      py={6}
      backdropFilter="blur(10px)"
      bg={bg}
      transition="background 0.2s"
      zIndex="sticky"
      borderBottom="1px solid"
      borderBottomColor="blackAlpha.300"
    >
      <Container
        display="flex"
        maxW="container.xl"
        justifyContent="space-between"
        alignItems="center"
        flexWrap="wrap"
      >
        <Flex w={['100%', null, null, 'fit-content']} justifyContent="space-between">
          <Link href="/">
            <Text fontSize={22}>T.D</Text>
          </Link>
          <Button
            aria-label="Toggle mobile navbar"
            display={['block', null, null, 'none']}
            variant="unstyled"
            onClick={() => setIsVisible(!isVisible)}
          >
            <Icon as={FaToggleOn} />
          </Button>
        </Flex>
        <Flex
          gap={8}
          flexWrap="wrap"
          width={['100%', null, null, 'fit-content']}
          flexDirection={['column', null, null, 'row']}
          display={display}
        >
          <Link href="/" variant="hover">
            Home
          </Link>
          <Link variant="hover" href="/blog">
            Blog
          </Link>
          <Link href="/#whoami" variant="hover">
            Who am I
          </Link>
          <Link href="/#projects" variant="hover">
            Projects
          </Link>
          <Link href="/#skills" variant="hover">
            Skills
          </Link>
          <Link href="/#experiences" variant="hover">
            Experiences
          </Link>
          <Link href="https://github.com/SharkEzz" outside>
            <Icon
              aria-label="Github"
              as={FaGithub}
              verticalAlign="middle"
              height="24px"
              width="24px"
            />
          </Link>
          <Link href="https://www.linkedin.com/in/tristan-dida/" outside>
            <Icon
              aria-label="LinkedIn"
              as={FaLinkedin}
              verticalAlign="middle"
              height="24px"
              width="24px"
            />
          </Link>
          <Link href="mailto:tristan.dida@free.fr">
            <Icon
              aria-label="Email"
              as={FaEnvelope}
              verticalAlign="middle"
              height="24px"
              width="24px"
            />
          </Link>
          <IconButton
            variant="unstyled"
            onClick={toggleColorMode}
            aria-label="Toggle theme"
            height="24px"
            width="24px"
            icon={colorMode === 'dark' ? <FaLightbulb /> : <FaMoon />}
          />
        </Flex>
      </Container>
    </Box>
  );
}
