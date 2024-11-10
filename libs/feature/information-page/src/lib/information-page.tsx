'use client';
import {
  Text,
  Center,
  Skeleton,
  Grid,
  GridItem,
  Stack,
  HStack,
  Box,
} from '@chakra-ui/react';

import {
  PaginationItems,
  PaginationNextTrigger,
  PaginationPrevTrigger,
  PaginationRoot,
} from '@leonardo/chakra-ui';

import { useState } from 'react';

import { CharacterCard } from '@leonardo/character-card';
import { useCharacters } from '@leonardo/rick-and-morty-api';
import { CharacterDialog } from '@leonardo/character-dialog';

export function InformationPage() {
  const [selectedCharacterId, setSelectedCharacterId] = useState<string | null>(
    null
  );
  const { loading, error, characters, pageInfo, pageSize, page, goToPage } =
    useCharacters();

  if (error)
    return (
      <Center height="80vh">
        <Stack justifyContent="center" textAlign="center">
          <Text fontSize="xl">Error loading characters</Text>
          <Text>Please reload the page</Text>
        </Stack>
      </Center>
    );

  return (
    <Stack p="6" pb="20">
      <Grid templateColumns="repeat(auto-fill, minmax(250px, 1fr))" gap={6}>
        {characters?.map((character) => (
          <GridItem key={character.id}>
            <CharacterCard
              loading={loading}
              onClick={() => setSelectedCharacterId(character.id)}
              image={character.image}
              name={character.name}
              description={`${character.species} - ${character.status}`}
            />
          </GridItem>
        ))}
      </Grid>

      {pageInfo ? (
        <Center position="fixed" left="0" width="100%" bottom="3">
          <Box
            bgColor="rgba(255, 255, 255, .6);"
            backdropFilter="blur(12px)"
            px="4"
            py="2"
            borderRadius="full"
          >
            <PaginationRoot
              count={pageInfo?.count}
              pageSize={pageSize}
              page={page}
              onPageChange={(e: { page: number }) => goToPage(e.page)}
              variant="subtle"
            >
              <HStack>
                <PaginationPrevTrigger />
                <PaginationItems />
                <PaginationNextTrigger />
              </HStack>
            </PaginationRoot>
          </Box>
        </Center>
      ) : null}

      {selectedCharacterId ? (
        <CharacterDialog
          characterId={selectedCharacterId}
          onClose={() => setSelectedCharacterId(null)}
        />
      ) : null}
    </Stack>
  );
}
