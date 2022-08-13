import { Button, Flex, Icon, Text } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { FaGithub, FaToggleOn } from 'react-icons/fa';
import Link from '../Link';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

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
    >
      <Flex w={['100%', null, 'fit-content']} justifyContent="space-between">
        <Link href="/">
          <Text fontSize={22}>T.D</Text>
        </Link>
        <Button
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
        <Link href="/">Home</Link>
        <Link href="#whoami">Who am I</Link>
        <Link href="#projects">Projects</Link>
        <Link href="#skills">Skills</Link>
        <Link href="https://github.com/SharkEzz" outside>
          <Icon
            aria-label="Github"
            as={FaGithub}
            verticalAlign="middle"
            height="24px"
            width="24px"
          />
        </Link>
      </Flex>
    </Flex>
  );
}
