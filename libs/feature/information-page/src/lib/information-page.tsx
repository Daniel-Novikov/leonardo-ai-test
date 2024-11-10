'use client';
import {
  Text,
  Center,
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

import { useState, useMemo } from 'react';

import { CharacterCard } from '@leonardo/character-card';
import { useCharacters } from '@leonardo/rick-and-morty-api';
import { CharacterDialog } from '@leonardo/character-dialog';

export const InformationPage = () => {
  const [selectedCharacterId, setSelectedCharacterId] = useState<string | null>(
    null
  );
  const { loading, error, characters, pageInfo, pageSize, page, goToPage } =
    useCharacters();

  const characterGridItems = useMemo(
    () =>
      characters?.map((character) => (
        <GridItem key={character.id}>
          <CharacterCard
            loading={loading}
            image={character.image}
            name={character.name}
            onClick={() => setSelectedCharacterId(character.id)}
            description={`${character.species} - ${character.status}`}
          />
        </GridItem>
      )),
    [characters, loading, setSelectedCharacterId]
  );

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
        {characterGridItems}
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
              size="xs"
              fontSize="2xs"
            >
              <HStack gap={{ base: '0', sm: '2' }}>
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
};
