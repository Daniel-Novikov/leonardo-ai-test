'use client';

import { Dialog, Skeleton } from '@chakra-ui/react';

import { useCharacter } from '@leonardo/rick-and-morty-api';
import { CloseButton } from '@leonardo/chakra-ui';

import { Content } from './content';

type CharacterDialogProps = {
  characterId: string;
  onClose(): void;
};

export const CharacterDialog = ({
  characterId,
  onClose,
}: CharacterDialogProps) => {
  const { character, loading, error } = useCharacter(characterId);

  return (
    <Dialog.Root lazyMount open onOpenChange={() => onClose()} size="lg">
      <Dialog.Backdrop />
      <Dialog.Positioner>
        <Dialog.Content>
          <Dialog.Header>
            <Skeleton asChild loading={loading}>
              <Dialog.Title>{character?.name || 'Not found'}</Dialog.Title>
            </Skeleton>
          </Dialog.Header>
          <Dialog.Body>
            <Content error={error} loading={loading} character={character} />
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
  );
};
