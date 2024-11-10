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

/**
 * Zustand store for managing and persisting user profile data.
 *
 * - Uses Zustand's `persist` middleware to store profile data in Local Storage.
 * - `isProfileLoaded` flag is set to true after the profile is rehydrated from Local Storage.
 */
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
