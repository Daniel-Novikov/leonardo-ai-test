'use client';
import { Fieldset, Stack, Card, Center } from '@chakra-ui/react';
import { useForm, FormProvider } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useProfileStore } from '@leonardo/profile-store';
import {
  ProfileForm,
  profileSchema,
  ProfileFormValues,
} from '@leonardo/profile-form';

export const ProfileSetupPage = () => {
  const setProfile = useProfileStore((state) => state.setProfile);

  const methods = useForm<ProfileFormValues>({
    resolver: zodResolver(profileSchema),
  });

  const { handleSubmit } = methods;
  const onSubmit = (data: ProfileFormValues) => {
    setProfile(data);
  };

  return (
    <FormProvider {...methods}>
      <Center minH="100vh" p="6">
        <Card.Root width="100%" maxWidth="500px">
          <Card.Body>
            <form onSubmit={handleSubmit(onSubmit)}>
              <Fieldset.Root size="lg" maxW="md">
                <Stack>
                  <Fieldset.Legend>Complete Your Profile</Fieldset.Legend>
                  <Fieldset.HelperText>
                    Please provide your profile details below.
                  </Fieldset.HelperText>
                </Stack>

                <ProfileForm />
              </Fieldset.Root>
            </form>
          </Card.Body>
        </Card.Root>
      </Center>
    </FormProvider>
  );
};
