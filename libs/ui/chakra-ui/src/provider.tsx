'use client';

import { ChakraProvider, defaultSystem } from '@chakra-ui/react';
import { ReactNode } from 'react';

type ProviderProps = {
  children: ReactNode;
};

export const Provider = ({ children }: ProviderProps) => {
  return <ChakraProvider value={defaultSystem}>{children}</ChakraProvider>;
};
