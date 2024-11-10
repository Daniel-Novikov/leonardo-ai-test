'use client';

import { Text, Box, Card, Skeleton } from '@chakra-ui/react';
import NextImage from 'next/image';

type CharacterCardProps = {
  image: string;
  name: string;
  description: string;
  onClick?(): void;
  loading?: boolean;
};

/**
 * CharacterCard component displays a card with character image, name, and description.
 * Supports loading state with Skeleton component
 */
export const CharacterCard = ({
  image,
  name,
  description,
  onClick,
  loading,
}: CharacterCardProps) => {
  return (
    <Skeleton asChild loading={loading}>
      <Card.Root
        position="relative"
        variant="elevated"
        overflow="hidden"
        cursor="pointer"
        onClick={onClick}
      >
        <NextImage
          src={image}
          alt={name}
          layout="responsive"
          width={500}
          height={500}
          objectFit="cover"
          priority
          quality={90}
          placeholder="blur"
          blurDataURL="data:iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mN8WA8AAkcBYnr93DQAAAAASUVORK5CYII="
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
    </Skeleton>
  );
};
