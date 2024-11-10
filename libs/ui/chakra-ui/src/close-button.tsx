import {
  IconButton as ChakraIconButton,
  IconButtonProps,
} from '@chakra-ui/react';
import { ReactNode } from 'react';
import { LuX } from 'react-icons/lu';

function _nullishCoalesce(lhs: ReactNode, rhsFn: () => ReactNode) {
  if (lhs != null) {
    return lhs;
  } else {
    return rhsFn();
  }
}

export const CloseButton = (props: IconButtonProps) => {
  return (
    <ChakraIconButton variant="ghost" aria-label="Close" {...props}>
      {_nullishCoalesce(props.children, () => (
        <LuX />
      ))}
    </ChakraIconButton>
  );
};
