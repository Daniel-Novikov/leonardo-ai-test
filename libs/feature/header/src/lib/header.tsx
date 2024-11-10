'use client';

import { Box, Flex, Text, Avatar, HStack, Heading } from '@chakra-ui/react';
import { useProfileStore } from '@leonardo/profile-store';

export const Header = () => {
  const profile = useProfileStore((state) => state.profile);

  return (
    <Box
      position="sticky"
      top="0"
      zIndex="999"
      bgColor="rgba(255, 255, 255, .94);"
      backdropFilter="blur(12px)"
      px="6"
      py="2"
      borderBottomWidth="1px"
    >
      <Flex align="center" justifyContent="space-between">
        <Heading size="md">The Rick and Morty: Characters</Heading>
        <HStack gap="2" px="6">
          <Avatar.Root bgColor="green.300" size="xs" />
          <Box>
            <Text fontWeight="bold" fontSize="sm">
              {profile?.username}
            </Text>
            <Text fontSize="xs">{profile?.jobTitle}</Text>
          </Box>
        </HStack>
      </Flex>
    </Box>
  );
};
