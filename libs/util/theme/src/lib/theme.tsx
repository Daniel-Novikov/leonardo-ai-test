import { createSystem, defaultConfig, defineConfig } from '@chakra-ui/react';

const config = defineConfig({
  globalCss: {
    'html, body, #root': {
      height: '100%',
    },
  },
});

export const system = createSystem(defaultConfig, config);
