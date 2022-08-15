import { chakra, ChakraProps } from '@chakra-ui/react';

export default function TimelineIcon(props: ChakraProps) {
  return (
    <chakra.svg
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...props}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      width="8"
      height="8"
    >
      <path
        fillRule="evenodd"
        d="M15.5 11.75a3.5 3.5 0 11-7 0 3.5 3.5 0 017 0zm1.444-.75a5.001 5.001 0 00-9.888 0H2.75a.75.75 0 100 1.5h4.306a5.001 5.001 0 009.888 0h4.306a.75.75 0 100-1.5h-4.306z"
      />
    </chakra.svg>
  );
}
