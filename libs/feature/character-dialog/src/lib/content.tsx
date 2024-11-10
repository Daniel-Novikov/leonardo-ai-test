'use client';

import {
  Stack,
  Tag,
  Box,
  Image,
  HStack,
  Table,
  Heading,
} from '@chakra-ui/react';
import NextImage from 'next/image';

import { CharacterDetails } from '@leonardo/rick-and-morty-api';

type ContentProps = {
  character: CharacterDetails;
};

export const Content = ({ character }: ContentProps) => {
  return (
    <HStack alignItems="start" gap="4">
      <Stack gap="2">
        <Table.Root variant="outline">
          <Table.Header>
            <Table.Row>
              <Table.ColumnHeader colSpan={2}>
                <Heading size="sm">Information</Heading>
              </Table.ColumnHeader>
            </Table.Row>
          </Table.Header>
          <Table.Body verticalAlign="baseline">
            <Table.Row>
              <Table.Cell fontWeight="bold">Status:</Table.Cell>
              <Table.Cell>{character.status}</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell fontWeight="bold">Species:</Table.Cell>
              <Table.Cell>{character.species}</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell fontWeight="bold">Type:</Table.Cell>
              <Table.Cell>{character.type || 'N/A'}</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell fontWeight="bold">Gender:</Table.Cell>
              <Table.Cell>{character.gender}</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell fontWeight="bold">Origin:</Table.Cell>
              <Table.Cell>{character.origin.name}</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell fontWeight="bold">Location:</Table.Cell>
              <Table.Cell>{character.location.name}</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell fontWeight="bold">Episodes:</Table.Cell>
              <Table.Cell>
                <Box as="ul" listStyleType="disc">
                  {character.episode.map((ep, index) => (
                    <li key={index}>
                      {ep.name} ({ep.episode})
                    </li>
                  ))}
                </Box>
              </Table.Cell>
            </Table.Row>
          </Table.Body>
        </Table.Root>
      </Stack>
      <Image asChild borderRadius="md">
        <NextImage
          src={character.image}
          alt={character.name}
          width={500}
          height={500}
          objectFit="cover"
        />
      </Image>
    </HStack>
  );
};
