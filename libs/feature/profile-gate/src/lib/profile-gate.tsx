import { useProfileStore } from '@leonardo/profile-store';
import { ReactNode } from 'react';

import { ProfileSetupPage } from '@leonardo/profile-setup-page';

type ProfileGateProps = {
  children: ReactNode;
};

export const ProfileGate = ({ children }: ProfileGateProps) => {
  const profile = useProfileStore((state) => state.profile);

  return !profile ? <ProfileSetupPage /> : children;
};
