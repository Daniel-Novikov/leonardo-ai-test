'use client';

import {
  Stack,
  Box,
  Image,
  SimpleGrid,
  Table,
  Heading,
  Text,
  Skeleton,
} from '@chakra-ui/react';
import NextImage from 'next/image';

import { CharacterDetails } from '@leonardo/rick-and-morty-api';
import { ApolloError } from '@apollo/client';

type ContentProps = {
  character?: CharacterDetails;
  loading?: boolean;
  error?: ApolloError;
};

export const Content = ({ character, error, loading }: ContentProps) => {
  if (error) return <Text>Error: {error.message}</Text>;

  const items = [
    { label: 'Status:', value: character?.status },
    { label: 'Species:', value: character?.species },
    { label: 'Type:', value: character?.type || 'N/A' },
    { label: 'Gender:', value: character?.gender },
    { label: 'Origin:', value: character?.origin.name },
    { label: 'Location:', value: character?.location.name },
    {
      label: 'Episodes:',
      value: (
        <Box as="ul" listStyleType="disc">
          {character?.episode.map((ep, index) => (
            <li key={index}>
              {ep.name} ({ep.episode})
            </li>
          ))}
        </Box>
      ),
    },
  ];

  return (
    <SimpleGrid alignItems="start" gap="4" minChildWidth="250px">
      {loading ? (
        <Skeleton boxSize="300px" maxWidth="100%" />
      ) : (
        <Image asChild borderRadius="md" bgColor="gray.100">
          {character?.image ? (
            <NextImage
              src={character.image}
              alt={character?.name || 'Character image'}
              width={500}
              height={500}
              objectFit="cover"
              priority
              quality={90}
              placeholder="blur"
              blurDataURL="data:iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mN8WA8AAkcBYnr93DQAAAAASUVORK5CYII="
            />
          ) : null}
        </Image>
      )}
      <Stack gap="2" flex="0 0 40%">
        <Table.Root variant="outline">
          <Table.Header>
            <Table.Row>
              <Table.ColumnHeader colSpan={2}>
                <Heading size="sm">Information</Heading>
              </Table.ColumnHeader>
            </Table.Row>
          </Table.Header>
          <Table.Body verticalAlign="baseline">
            {items.map((item) => (
              <Table.Row key={item.label}>
                <Table.Cell fontWeight="bold">{item.label}</Table.Cell>
                <Table.Cell>
                  {loading ? (
                    <Skeleton width="100px" height="10px" />
                  ) : (
                    item.value
                  )}
                </Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table.Root>
      </Stack>
    </SimpleGrid>
  );
};
