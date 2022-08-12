import { extendTheme } from '@chakra-ui/react';
import Text from './components/Text';
import Heading from './components/Heading';

const theme = extendTheme({
  components: {
    Heading,
    Text,
  },
  config: {
    initialColorMode: 'light',
    useSystemColorMode: false,
  },
  fonts: {
    body: 'Lato, sans-serif',
    heading: 'Lato, sans-serif',
  },
  styles: {
    global: {
      'html, body': {
        color: '#425466',
        scrollBehavior: 'smooth',
      },
    },
  },
});

export default theme;
