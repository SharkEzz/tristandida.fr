import { chakra } from '@chakra-ui/react';

const ArticleWrapper = chakra('article', {
  baseStyle: {
    a: {
      color: 'teal.300',
    },
    code: {
      fontSize: 16,
    },
    h2: {
      fontSize: '36px',
      fontWeight: 700,
      my: 4,
      width: 'fit-content',
    },
    h3: {
      fontSize: '30px',
      fontWeight: 700,
      my: 4,
    },
    h4: {
      fontSize: '24px',
      fontWeight: 700,
      my: 4,
    },
    h5: {
      fontSize: '18px',
      my: 4,
    },
    h6: {
      fontSize: '14px',
      my: 4,
    },
    img: {
      mx: 'auto',
      my: 8,
    },
    p: {
      fontSize: '18px',
      my: 2,
      textAlign: 'justify',
    },
    'p > code': {
      bg: 'gray.200',
      px: 1,
    },
    pre: {
      bg: '#171421',
      color: 'white',
      overflow: 'auto',
      p: 6,
    },
    ul: {
      my: 2,
    },
  },
});

export default ArticleWrapper;
