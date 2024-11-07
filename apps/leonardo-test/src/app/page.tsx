import { VStack, Checkbox, Button } from '@chakra-ui/react';

export default function Index() {
  return (
    <VStack>
      <Button>Click me</Button>
      <Checkbox.Root>
        <Checkbox.Control>
          <Checkbox.Indicator />
        </Checkbox.Control>
        <Checkbox.Label>Label</Checkbox.Label>
        <Checkbox.HiddenInput />
      </Checkbox.Root>
    </VStack>
  );
}
