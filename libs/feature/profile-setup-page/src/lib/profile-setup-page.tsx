'use client';
import { Button, Fieldset, Stack, Input, Card, Center } from '@chakra-ui/react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useProfileStore } from '@leonardo/profile-store';
import { Field } from '@leonardo/chakra-ui';

const profileSchema = z.object({
  username: z.string().min(1, 'Username is required'),
  jobTitle: z.string().min(1, 'Job title is required'),
});

type ProfileFormValues = z.infer<typeof profileSchema>;

export const ProfileSetupPage = () => {
  const setProfile = useProfileStore((state) => state.setProfile);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ProfileFormValues>({
    resolver: zodResolver(profileSchema),
  });

  const onSubmit = (data: ProfileFormValues) => {
    console.log('onSubmit', data);
    setProfile(data);
  };

  return (
    <Center h="100%">
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

              <Stack>
                <Field
                  label="Username"
                  invalid={!!errors.username}
                  errorText={errors.username?.message}
                >
                  <Input
                    placeholder="Enter your username"
                    {...register('username')}
                  />
                </Field>
                <Field
                  invalid={!!errors.jobTitle}
                  mb="6"
                  label="Job Title"
                  errorText={errors.jobTitle?.message}
                >
                  <Input
                    placeholder="Enter your job title"
                    {...register('jobTitle')}
                  />
                </Field>

                <Button type="submit" colorScheme="blue">
                  Save Profile
                </Button>
              </Stack>
            </Fieldset.Root>
          </form>
        </Card.Body>
      </Card.Root>
    </Center>
  );
};
