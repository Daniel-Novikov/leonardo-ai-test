'use client';
import { Spinner, Center, Text } from '@chakra-ui/react';

import { useCharacters } from '@leonardo/rick-and-morty-api';

export function InformationPage() {
  const { loading, error, characters, pageInfo, page, goToPage } =
    useCharacters();

  if (loading)
    return (
      <Center>
        <Spinner />
      </Center>
    );

  if (error) return <Text>Error loading characters</Text>;

  console.log('characters', characters);
  return (
    <div>
      <h1>Welcome to InformationPage!</h1>
    </div>
  );
}
