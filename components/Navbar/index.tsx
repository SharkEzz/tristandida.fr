import { Button, Flex, Icon, Text, useMediaQuery } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { FaEnvelope, FaGithub, FaLinkedin, FaToggleOn } from 'react-icons/fa';
import Link from '../Link';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  const [isMobile] = useMediaQuery('(max-width: 768px)');

  const onScroll = () => {
    if (window.scrollY > 0) {
      setIsScrolled(true);
    } else if (window.scrollY === 0) {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', onScroll);

    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, [isScrolled]);

  useEffect(() => {
    if (isMobile) {
      setIsVisible(false);
    }
  }, [isMobile]);

  return (
    <Flex
      as="nav"
      position="fixed"
      top={0}
      left={0}
      w="full"
      px={5}
      p={4}
      align="center"
      justify="space-between"
      color="white"
      backdropFilter="blur(8px)"
      bg={[
        isScrolled || isVisible ? 'blackAlpha.600' : 'transparent',
        null,
        isScrolled ? 'blackAlpha.600' : 'transparent',
      ]}
      shadow={isScrolled ? 'md' : 'none'}
      transition="background 0.2s"
      zIndex="sticky"
      flexWrap="wrap"
      gap={4}
      overflow="auto"
      maxH="full"
    >
      <Flex w={['100%', null, 'fit-content']} justifyContent="space-between">
        <Link href="/">
          <Text fontSize={22}>T.D</Text>
        </Link>
        <Button
          aria-label="Toggle mobile navbar"
          display={['block', null, 'none']}
          variant="unstyled"
          onClick={() => setIsVisible(!isVisible)}
        >
          <Icon as={FaToggleOn} />
        </Button>
      </Flex>
      <Flex
        gap={8}
        flexWrap="wrap"
        width={['100%', null, 'fit-content']}
        flexDirection={['column', null, 'row']}
        display={[isVisible ? 'flex' : 'none', null, 'flex']}
      >
        <Link href="/" variant="hover">
          Home
        </Link>
        {/* <Link href="/blog">Blog</Link> */}
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
      </Flex>
    </Flex>
  );
}
