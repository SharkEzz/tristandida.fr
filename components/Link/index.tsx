import NextLink from 'next/link';
import { Link as ChakraLink } from '@chakra-ui/react';

export default function Link({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <NextLink passHref href={href}>
      <ChakraLink _hover={{ textDecoration: 'none' }}>{children}</ChakraLink>
    </NextLink>
  );
}
