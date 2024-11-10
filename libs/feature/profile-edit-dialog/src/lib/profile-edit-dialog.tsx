'use client';
import { Dialog, Fieldset } from '@chakra-ui/react';
import { useForm, FormProvider } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useProfileStore } from '@leonardo/profile-store';
import { CloseButton } from '@leonardo/chakra-ui';
import {
  ProfileForm,
  profileSchema,
  ProfileFormValues,
} from '@leonardo/profile-form';

type ProfileEditDialogProps = {
  open: boolean;
  onClose(): void;
};

export const ProfileEditDialog = ({
  open,
  onClose,
}: ProfileEditDialogProps) => {
  const setProfile = useProfileStore((state) => state.setProfile);
  const profile = useProfileStore((state) => state.profile);

  const methods = useForm<ProfileFormValues>({
    resolver: zodResolver(profileSchema),
    defaultValues: {
      jobTitle: profile?.jobTitle,
      username: profile?.username,
    },
  });

  const { handleSubmit } = methods;

  const onSubmit = (data: ProfileFormValues) => {
    setProfile(data);
    onClose();
  };

  return (
    <FormProvider {...methods}>
      <Dialog.Root lazyMount open={open} onOpenChange={() => onClose()}>
        <Dialog.Backdrop />
        <Dialog.Positioner>
          <Dialog.Content>
            <Dialog.Header>
              <Dialog.Title>Edit profile</Dialog.Title>
              <Dialog.Description>
                Update your profile details below.
              </Dialog.Description>
            </Dialog.Header>
            <Dialog.Body>
              <form onSubmit={handleSubmit(onSubmit)}>
                <Fieldset.Root size="lg" maxW="md">
                  <ProfileForm />
                </Fieldset.Root>
              </form>
            </Dialog.Body>

            <CloseButton
              as={Dialog.CloseTrigger}
              position="absolute"
              top="2"
              insetEnd="2"
              size="sm"
            />
          </Dialog.Content>
        </Dialog.Positioner>
      </Dialog.Root>
    </FormProvider>
  );
};
