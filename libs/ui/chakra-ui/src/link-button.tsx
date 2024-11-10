'use client';

import { Button, ButtonProps } from '@chakra-ui/react';
import NextLink, { type LinkProps as NextLinkProps } from 'next/link';
import { ReactNode } from 'react';

type LinkProps = Omit<NextLinkProps, 'href'> & {
  children: ReactNode;
  href?: NextLinkProps['href'];
};

type LinkButtonProps = LinkProps & ButtonProps;

const Link = ({ href, ...props }: LinkProps) => {
  if (href) {
    return <NextLink href={href} {...props} />;
  }
  return props.children;
};

export const LinkButton = ({ href, ...props }: LinkButtonProps) => {
  return (
    <Link href={href}>
      <Button {...props} />
    </Link>
  );
};
