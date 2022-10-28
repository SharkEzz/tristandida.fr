import NextLink from 'next/link';
import { Link as ChakraLink } from '@chakra-ui/react';

export default function Link({
  href,
  outside,
  children,
  variant,
}: {
  href: string;
  children: React.ReactNode;
  outside?: boolean;
  variant?: string;
}) {
  return (
    <ChakraLink as={NextLink} href={href} target={outside ? '_blank' : undefined} variant={variant}>
      {children}
    </ChakraLink>
  );
}

Link.defaultProps = {
  outside: false,
  variant: undefined,
};
