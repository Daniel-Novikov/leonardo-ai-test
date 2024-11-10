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

/**
 * Sticky header to display at the top of the page.
 * Display page name and profile information
 */
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
        as="header"
      >
        <Flex align="center" gap="6" justifyContent="space-between">
          <Heading size="md">The Rick and Morty: Characters</Heading>
          <Button variant="plain" onClick={() => setOpen(true)} p="0">
            <HStack gap="2">
              <Avatar.Root
                bgColor="green.300"
                size={{ base: '2xs', sm: 'xs' }}
              />
              <Box textAlign="left">
                <Text fontWeight="bold" fontSize="sm" mb="-1">
                  {profile?.username}
                </Text>
                <Text
                  fontSize="xs"
                  textOverflow="ellipsis"
                  overflow="hidden"
                  maxWidth={{ base: '100px', sm: 'none' }}
                >
                  {profile?.jobTitle}
                </Text>
              </Box>
            </HStack>
          </Button>
        </Flex>
      </Box>
      <ProfileEditDialog open={open} onClose={() => setOpen(false)} />
    </>
  );
};
