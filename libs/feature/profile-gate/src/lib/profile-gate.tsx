'use client';
import { useProfileStore } from '@leonardo/profile-store';
import { ReactNode } from 'react';
import { Spinner, Center } from '@chakra-ui/react';

import { ProfileSetupPage } from '@leonardo/profile-setup-page';

type ProfileGateProps = {
  children: ReactNode;
};

/**
 * Prevents access to all pages, unless "profile" information has been filled
 */
export const ProfileGate = ({ children }: ProfileGateProps) => {
  const profile = useProfileStore((state) => state.profile);
  const isProfileLoaded = useProfileStore((state) => state.isProfileLoaded);

  if (!isProfileLoaded) {
    return (
      <Center height="100vh">
        <Spinner size="xl" />
      </Center>
    );
  }

  if (!profile) {
    return <ProfileSetupPage />;
  }

  return children;
};
