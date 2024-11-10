'use client';

import { ChakraProvider } from '@chakra-ui/react';
import { ReactNode } from 'react';

import { system } from '@leonardo/theme';

type ProviderProps = {
  children: ReactNode;
};

export const Provider = ({ children }: ProviderProps) => {
  return <ChakraProvider value={system}>{children}</ChakraProvider>;
};
