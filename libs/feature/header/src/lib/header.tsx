'use client';
import { useState } from 'react';

import {
  Box,
  Flex,
  Text,
  Avatar,
  HStack,
  Heading,
  Button,
} from '@chakra-ui/react';
import { useProfileStore } from '@leonardo/profile-store';
import { ProfileEditDialog } from '@leonardo/profile-edit-dialog';

export const Header = () => {
  const profile = useProfileStore((state) => state.profile);
  const [open, setOpen] = useState(false);

  return (
    <>
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
          <Button variant="plain" onClick={() => setOpen(true)}>
            <HStack gap="2">
              <Avatar.Root bgColor="green.300" size="xs" />
              <Box textAlign="left">
                <Text fontWeight="bold" fontSize="sm" mb="-1">
                  {profile?.username}
                </Text>
                <Text fontSize="xs">{profile?.jobTitle}</Text>
              </Box>
            </HStack>
          </Button>
        </Flex>
      </Box>
      <ProfileEditDialog open={open} onClose={() => setOpen(false)} />
    </>
  );
};
