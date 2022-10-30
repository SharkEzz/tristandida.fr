import type { ComponentStyleConfig } from '@chakra-ui/theme';

const Text: ComponentStyleConfig = {
  baseStyle: {},
  defaultProps: {},
  sizes: {},
  variants: {
    accent: {
      color: 'blue.400',
    },
    muted: (props) => ({
      color: props.colorMode === 'light' ? 'blackAlpha.700' : 'whiteAlpha.700',
    }),
  },
};

export default Text;
