import { Flex, HStack, Icon, Text } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { FaGithub } from 'react-icons/fa';
import Link from '../Link';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

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
      position="sticky"
      top={0}
      left={0}
      w="full"
      px={5}
      h={16}
      align="center"
      justify="space-between"
      color="white"
      backdropFilter={isScrolled ? 'blur(8px)' : 'none'}
      bg={isScrolled ? 'blackAlpha.600' : 'transparent'}
      shadow={isScrolled ? 'md' : 'none'}
      transition="background 0.2s"
      zIndex="sticky"
    >
      <Link href="/">
        <Text fontSize={22}>T.D</Text>
      </Link>
      <HStack spacing={8} display={['none', null, 'block']}>
        <Link href="/">Home</Link>
        <Link href="#about">About</Link>
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
      </HStack>
    </Flex>
  );
}
