import { Field as ChakraField, type FieldRootProps } from '@chakra-ui/react';
import { ReactNode } from 'react';

type FieldProps = {
  label?: string;
  children: ReactNode;
  helperText?: string;
  errorText?: string;
  optionalText?: string;
} & FieldRootProps;

export const Field = (props: FieldProps) => {
  const { label, children, helperText, errorText, optionalText, ...rest } =
    props;
  return (
    <ChakraField.Root {...rest}>
      {label && (
        <ChakraField.Label>
          {label}
          <ChakraField.RequiredIndicator fallback={optionalText} />
        </ChakraField.Label>
      )}
      {children}
      {helperText && (
        <ChakraField.HelperText>{helperText}</ChakraField.HelperText>
      )}
      {errorText && <ChakraField.ErrorText>{errorText}</ChakraField.ErrorText>}
    </ChakraField.Root>
  );
};
