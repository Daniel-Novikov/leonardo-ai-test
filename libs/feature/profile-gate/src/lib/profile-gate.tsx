'use client';
import { useProfileStore } from '@leonardo/profile-store';
import { ReactNode } from 'react';
import { Spinner, Center } from '@chakra-ui/react';

import { ProfileSetupPage } from '@leonardo/profile-setup-page';

type ProfileGateProps = {
  children: ReactNode;
};

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
