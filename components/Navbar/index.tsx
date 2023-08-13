import { Box, Button, Container, Flex, Icon, Text, useBreakpointValue, useColorModeValue } from '@chakra-ui/react';
import { useState } from 'react';
import { FaToggleOn } from 'react-icons/fa';
import Link from '../Link';
import NavbarLinks from './NavbarLinks';

export default function Navbar() {
  const [isVisible, setIsVisible] = useState(false);

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
      py={[3, null, null, 6]}
      backdropFilter="blur(10px)"
      bg={bg}
      transition="background 0.2s"
      zIndex="sticky"
      borderBottom="1px solid"
      borderBottomColor="blackAlpha.300"
    >
      <Container display="flex" maxW="container.xl" justifyContent="space-between" alignItems="center" flexWrap="wrap">
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
          <NavbarLinks />
        </Flex>
      </Container>
    </Box>
  );
}
