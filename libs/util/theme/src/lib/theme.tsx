import { createSystem, defaultConfig, defineConfig } from '@chakra-ui/react';

/**
 * Overriding default chakra-ui theme
 */
const config = defineConfig({
  globalCss: {
    'html, #root': {
      height: '100%',
    },
    body: {
      minHeight: '100%',
    },
  },
});

export const system = createSystem(defaultConfig, config);
