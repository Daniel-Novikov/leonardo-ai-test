'use client';

import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import { ChakraProvider } from '@chakra-ui/react';
import { ReactNode } from 'react';

import { system } from '@leonardo/theme';

const client = new ApolloClient({
  uri: 'https://rickandmortyapi.com/graphql',
  cache: new InMemoryCache(),
});

type ProviderProps = {
  children: ReactNode;
};

export const Provider = ({ children }: ProviderProps) => {
  return (
    <ApolloProvider client={client}>
      <ChakraProvider value={system}>{children}</ChakraProvider>
    </ApolloProvider>
  );
};
