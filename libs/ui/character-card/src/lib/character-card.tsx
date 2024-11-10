'use client';

import { Text, Box, Card } from '@chakra-ui/react';
import NextImage from 'next/image';

type CharacterCardProps = {
  image: string;
  name: string;
  description: string;
};

export function CharacterCard({
  image,
  name,
  description,
}: CharacterCardProps) {
  return (
    <Card.Root position="relative" variant="elevated" overflow="hidden">
      <NextImage
        src={image}
        alt={name}
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
          {name}
        </Text>
        <Text fontSize="sm">{description}</Text>
      </Box>
    </Card.Root>
  );
}
