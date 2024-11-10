'use client';

import { Dialog, Button, Spinner, Text } from '@chakra-ui/react';

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

  const renderContent = () => {
    if (loading) return <Spinner />;
    if (error) return <Text>Error: {error.message}</Text>;

    if (!character) return <Text>No character found</Text>;

    return <Content character={character} />;
  };

  return (
    <Dialog.Root lazyMount open onOpenChange={() => onClose()} size="lg">
      <Dialog.Backdrop />
      <Dialog.Positioner>
        <Dialog.Content>
          <Dialog.Header>
            <Dialog.Title>{character?.name}</Dialog.Title>
          </Dialog.Header>
          <Dialog.Body>{renderContent()}</Dialog.Body>

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
