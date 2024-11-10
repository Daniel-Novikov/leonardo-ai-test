'use client';
import { Button, Stack, Input } from '@chakra-ui/react';
import { useFormContext } from 'react-hook-form';
import { z } from 'zod';

import { Field } from '@leonardo/chakra-ui';

export const profileSchema = z.object({
  username: z.string().min(1, 'Username is required'),
  jobTitle: z.string().min(1, 'Job title is required'),
});

export type ProfileFormValues = z.infer<typeof profileSchema>;

export const ProfileForm = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext<ProfileFormValues>();

  return (
    <Stack gap="4">
      <Field
        label="Username"
        invalid={!!errors.username}
        errorText={errors.username?.message}
      >
        <Input placeholder="Enter your username" {...register('username')} />
      </Field>
      <Field
        invalid={!!errors.jobTitle}
        mb="6"
        label="Job Title"
        errorText={errors.jobTitle?.message}
      >
        <Input placeholder="Enter your job title" {...register('jobTitle')} />
      </Field>

      <Button type="submit" colorScheme="blue">
        Save Profile
      </Button>
    </Stack>
  );
};
