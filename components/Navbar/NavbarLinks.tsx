import { Icon, IconButton, useColorMode } from '@chakra-ui/react';
import { memo } from 'react';
import { FaEnvelope, FaGithub, FaLightbulb, FaLinkedin, FaMoon } from 'react-icons/fa';
import Link from '../Link';

function NavbarLinks() {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <>
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
        <Icon aria-label="Github" as={FaGithub} verticalAlign="middle" height="24px" width="24px" />
      </Link>
      <Link href="https://www.linkedin.com/in/tristan-dida/" outside>
        <Icon aria-label="LinkedIn" as={FaLinkedin} verticalAlign="middle" height="24px" width="24px" />
      </Link>
      <Link href="mailto:tristan.dida@free.fr">
        <Icon aria-label="Email" as={FaEnvelope} verticalAlign="middle" height="24px" width="24px" />
      </Link>
      <IconButton
        variant="unstyled"
        onClick={toggleColorMode}
        aria-label="Toggle theme"
        height="24px"
        width="24px"
        icon={colorMode === 'dark' ? <FaLightbulb /> : <FaMoon />}
      />
    </>
  );
}

export default memo(NavbarLinks);
