import { createSystem, defaultConfig, defineConfig } from '@chakra-ui/react';

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
