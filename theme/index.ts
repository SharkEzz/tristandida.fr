import { extendTheme } from '@chakra-ui/react';
import Text from './components/Text';
import Heading from './components/Heading';
import Link from './components/Link';

const theme = extendTheme({
  colors: {
    darkGradient:
      'linear-gradient(220deg, hsl(293deg 100% 3%) 0%, hsl(282deg 78% 4%) 4%, hsl(272deg 63% 5%) 9%, hsl(260deg 52% 6%) 15%, hsl(247deg 43% 7%) 22%, hsl(233deg 44% 8%) 30%, hsl(222deg 52% 8%) 39%, hsl(215deg 61% 7%) 50%, hsl(209deg 70% 7%) 65%, hsl(205deg 78% 7%) 90%)',
    gradient:
      'linear-gradient(220deg, hsl(293deg 100% 98%) 0%, hsl(277deg 100% 98%) 4%, hsl(263deg 100% 98%) 9%, hsl(250deg 100% 97%) 15%, hsl(237deg 100% 97%) 22%, hsl(227deg 100% 96%) 30%, hsl(220deg 100% 95%) 39%, hsl(214deg 97% 94%) 50%, hsl(210deg 92% 93%) 65%, hsl(205deg 86% 91%) 90%)',
    reversedDarkGradient:
      'linear-gradient(45deg, hsl(293deg 100% 3%) 0%, hsl(282deg 78% 4%) 4%, hsl(272deg 63% 5%) 9%, hsl(260deg 52% 6%) 15%, hsl(247deg 43% 7%) 22%, hsl(233deg 44% 8%) 30%, hsl(222deg 52% 8%) 39%, hsl(215deg 61% 7%) 50%, hsl(209deg 70% 7%) 65%, hsl(205deg 78% 7%) 90%)',
    reversedGradient:
      'linear-gradient(40deg, hsl(293deg 100% 98%) 0%, hsl(277deg 100% 98%) 4%, hsl(263deg 100% 98%) 9%, hsl(250deg 100% 97%) 15%, hsl(237deg 100% 97%) 22%, hsl(227deg 100% 96%) 30%, hsl(220deg 100% 95%) 39%, hsl(214deg 97% 94%) 50%, hsl(210deg 92% 93%) 65%, hsl(205deg 86% 91%) 90%)',
  },
  components: {
    Heading,
    Link,
    Text,
  },
  config: {
    useSystemColorMode: false,
  },
  fonts: {
    body: `'Lato', sans-serif`,
    heading: `'Lato', sans-serif`,
  },
  styles: {
    global: (props: { colorMode: 'light' | 'dark' }) => {
      return {
        body: {
          background: props.colorMode === 'light' ? '#f6f9fc' : 'hsl(233deg 44% 8%)',
          color: '#425466',
          scrollBehavior: 'smooth',
        },
        html: {
          scrollBehavior: 'smooth',
        },
      };
    },
  },
});

export default theme;
