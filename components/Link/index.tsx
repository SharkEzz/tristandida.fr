import NextLink from 'next/link';
import { Link as ChakraLink } from '@chakra-ui/react';

export default function Link({
  href,
  outside,
  children,
}: {
  href: string;
  outside?: boolean;
  children: React.ReactNode;
}) {
  return (
    <NextLink passHref href={href}>
      <ChakraLink
        _hover={{ textDecoration: 'none' }}
        target={outside ? '_blank' : '_self'}
      >
        {children}
      </ChakraLink>
    </NextLink>
  );
}

Link.defaultProps = {
  outside: false,
};
