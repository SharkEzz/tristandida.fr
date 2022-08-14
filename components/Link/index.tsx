import NextLink from 'next/link';
import { Link as ChakraLink } from '@chakra-ui/react';

export default function Link({
  href,
  outside,
  children,
  variant,
}: {
  href: string;
  outside?: boolean;
  children: React.ReactNode;
  variant?: string;
}) {
  return (
    <NextLink passHref href={href}>
      <ChakraLink
        target={outside ? '_blank' : '_self'}
        // eslint-disable-next-line react/jsx-props-no-spreading
        variant={variant}
      >
        {children}
      </ChakraLink>
    </NextLink>
  );
}

Link.defaultProps = {
  outside: false,
  variant: undefined,
};
