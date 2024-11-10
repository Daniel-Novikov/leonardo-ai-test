import { create } from 'zustand';
import { persist } from 'zustand/middleware';

type ProfileData = {
  username: string;
  jobTitle: string;
};

type ProfileStore = {
  profile: ProfileData | null;
  isProfileLoaded: boolean;
  setProfile: (data: ProfileData) => void;
};

export const useProfileStore = create<ProfileStore>()(
  persist(
    (set) => ({
      profile: null,
      isProfileLoaded: false,
      setProfile: (data) => set({ profile: data, isProfileLoaded: true }),
    }),
    {
      name: 'userProfile', // Key in Local Storage
      onRehydrateStorage: () => (state) => {
        // Set `isProfileLoaded` to true once rehydration completes
        if (state) {
          state.isProfileLoaded = true;
        }
      },
    }
  )
);
