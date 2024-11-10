import { Dialog, Button } from '@chakra-ui/react';
import { useState } from 'react';

export function CharacterDialog() {
  const [open, setOpen] = useState(false);

  return (
    <Dialog.Root lazyMount open>
      <Dialog.Backdrop />
      <Dialog.Positioner>
        <Dialog.Content>
          <Dialog.Header>
            <Dialog.Title>Dialog. Title</Dialog.Title>
          </Dialog.Header>
          <Dialog.Body></Dialog.Body>
          <Dialog.Footer>
            <Dialog.ActionTrigger asChild>
              <Button variant="outline">Cancel</Button>
            </Dialog.ActionTrigger>
            <Button>Save</Button>
          </Dialog.Footer>
          <Dialog.CloseTrigger />
        </Dialog.Content>
      </Dialog.Positioner>
    </Dialog.Root>
  );
}
