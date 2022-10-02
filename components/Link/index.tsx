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
    <NextLink passHref href={href}>
      <ChakraLink target={outside ? '_blank' : undefined} variant={variant}>
        {children}
      </ChakraLink>
    </NextLink>
  );
}

Link.defaultProps = {
  outside: false,
  variant: undefined,
};
