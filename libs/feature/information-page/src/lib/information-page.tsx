'use client';
import {
  Spinner,
  Center,
  Text,
  Grid,
  GridItem,
  Stack,
  HStack,
} from '@chakra-ui/react';

import {
  PaginationItems,
  PaginationNextTrigger,
  PaginationPrevTrigger,
  PaginationRoot,
} from '@leonardo/chakra-ui';

import { CharacterCard } from '@leonardo/character-card';
import { useCharacters } from '@leonardo/rick-and-morty-api';
import { CharacterDialog } from '@leonardo/character-dialog';

export function InformationPage() {
  const { loading, error, characters, pageInfo, pageSize, page, goToPage } =
    useCharacters();

  if (loading)
    return (
      <Center>
        <Spinner />
      </Center>
    );

  if (error) return <Text>Error loading characters</Text>;

  return (
    <Stack p="6">
      <Grid templateColumns="repeat(auto-fill, minmax(300px, 1fr))" gap={6}>
        {characters?.map((character) => (
          <GridItem key={character.id}>
            <CharacterCard
              image={character.image}
              name={character.name}
              description={`${character.species} - ${character.status}`}
            />
          </GridItem>
        ))}
      </Grid>

      <PaginationRoot
        count={pageInfo?.count}
        pageSize={pageSize}
        page={page}
        onPageChange={(e: { page: number }) => goToPage(e.page)}
        variant="solid"
      >
        <HStack>
          <PaginationPrevTrigger />
          <PaginationItems />
          <PaginationNextTrigger />
        </HStack>
      </PaginationRoot>

      <CharacterDialog />
    </Stack>
  );
}
