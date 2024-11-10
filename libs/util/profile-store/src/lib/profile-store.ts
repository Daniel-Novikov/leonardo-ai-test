import { create } from 'zustand';
import { persist } from 'zustand/middleware';

type ProfileData = {
  username: string;
  jobTitle: string;
};

type ProfileStore = {
  profile: ProfileData | null;
  setProfile: (data: ProfileData) => void;
};

export const useProfileStore = create<ProfileStore>()(
  persist(
    (set) => ({
      profile: null,
      setProfile: (data) => set({ profile: data }),
    }),
    {
      name: 'userProfile', // Key in Local Storage
    }
  )
);
