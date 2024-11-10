'use client';
import {
  Spinner,
  Center,
  Text,
  Grid,
  GridItem,
  Box,
  Stack,
  HStack,
} from '@chakra-ui/react';
import Image from 'next/image';

import {
  PaginationItems,
  PaginationNextTrigger,
  PaginationPrevTrigger,
  PaginationRoot,
} from '@leonardo/chakra-ui';

import { useCharacters } from '@leonardo/rick-and-morty-api';

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

  console.log('characters', characters);
  return (
    <Stack>
      <Grid templateColumns="repeat(auto-fill, minmax(300px, 1fr))" gap={6}>
        {characters?.map((character) => (
          <GridItem key={character.id}>
            <Box
              position="relative"
              borderRadius="md"
              boxShadow="lg"
              overflow="hidden"
              bg="gray.200"
            >
              <Image
                src={character.image}
                alt={character.name}
                layout="responsive"
                width={500}
                height={500}
                objectFit="cover"
                priority
                quality={90}
              />
              <Box
                position="absolute"
                bottom="0"
                left="0"
                right="0"
                p={4}
                bg="linear-gradient(to top, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0))"
                color="white"
              >
                <Text fontSize="xl" fontWeight="bold">
                  {character.name}
                </Text>
                <Text fontSize="sm">
                  {character.species} - {character.status}
                </Text>
              </Box>
            </Box>
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
    </Stack>
  );
}
