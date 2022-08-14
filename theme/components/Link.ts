import type { ComponentStyleConfig } from '@chakra-ui/theme';

const Link: ComponentStyleConfig = {
  baseStyle: {
    _hover: {
      textDecor: 'none',
    },
  },
  defaultProps: {},
  sizes: {},
  variants: {
    hover: {
      _after: {
        bg: 'teal.200',
        bottom: 0,
        content: '""',
        height: '2px',
        left: 0,
        position: 'absolute',
        transition: 'width 0.2s',
        width: 0,
      },
      _hover: {
        _after: {
          width: 'full',
        },
        textDecor: 'none',
      },
      position: 'relative',
    },
  },
};

export default Link;
