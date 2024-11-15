'use client';

import {
  Button,
  Pagination as ChakraPagination,
  IconButton,
  Text,
  createContext,
  usePaginationContext,
  type BoxProps,
  type ButtonProps,
  type PaginationEllipsisProps,
  type PaginationRootProps as ChakraPaginationRootProps,
} from '@chakra-ui/react';

import { forwardRef, useMemo } from 'react';
import {
  HiChevronLeft,
  HiChevronRight,
  HiMiniEllipsisHorizontal,
} from 'react-icons/hi2';
import { LinkButton } from './link-button';

const variantMap: Record<
  string,
  Record<'default' | 'ellipsis' | 'current', ButtonProps['variant']>
> = {
  outline: { default: 'ghost', ellipsis: 'plain', current: 'outline' },
  solid: { default: 'outline', ellipsis: 'outline', current: 'solid' },
  subtle: { default: 'ghost', ellipsis: 'plain', current: 'subtle' },
} as const;

type RootPropsContext = {
  size: ButtonProps['size'];
  variantMap: {
    default: ButtonProps['variant'];
    ellipsis: ButtonProps['variant'];
    current: ButtonProps['variant'];
  };
  getHref?: (page: number) => string;
};

const [RootPropsProvider, useRootProps] = createContext<RootPropsContext>({
  name: 'RootPropsProvider',
});

type PageItem = {
  type: 'page' | 'ellipsis';
  value: number;
};

type PaginationRootProps = {
  size?: ButtonProps['size'];
  variant?: keyof typeof variantMap;
  getHref?: (page: number) => string;
} & ChakraPaginationRootProps;

type PaginationItemProps = {
  value: number;
  isCurrent?: boolean;
  getHref?: (page: number) => string;
};

type PaginationPrevNextProps = {
  size?: 'sm' | 'md' | 'lg';
  variantMap?: Record<string, string>;
  getHref?: (page: number) => string;
};

type PaginationPageTextProps = {
  format?: 'short' | 'compact' | 'full';
};

export const PaginationRoot = (props: PaginationRootProps) => {
  const { size = 'sm', variant = 'outline', getHref, ...rest } = props;
  return (
    <RootPropsProvider
      value={{ size, variantMap: variantMap[variant], getHref }}
    >
      <ChakraPagination.Root type={getHref ? 'link' : 'button'} {...rest} />
    </RootPropsProvider>
  );
};

export const PaginationEllipsis = (props: PaginationEllipsisProps) => {
  const { size, variantMap } = useRootProps();
  return (
    <ChakraPagination.Ellipsis {...props}>
      <Button as="span" variant={variantMap.ellipsis} px="0" size={size}>
        <HiMiniEllipsisHorizontal />
      </Button>
    </ChakraPagination.Ellipsis>
  );
};

export const PaginationItem = (props: PaginationItemProps) => {
  const { page } = usePaginationContext();
  const { size, variantMap, getHref } = useRootProps();

  const current = page === props.value;
  const variant = current ? variantMap.current : variantMap.default;

  if (getHref) {
    return (
      <LinkButton href={getHref(props.value)} variant={variant} size={size}>
        {props.value}
      </LinkButton>
    );
  }

  return (
    <Button as={ChakraPagination.Item} variant={variant} size={size} {...props}>
      {props.value}
    </Button>
  );
};

// PaginationPrevTrigger component
export const PaginationPrevTrigger = (props: PaginationPrevNextProps) => {
  const { size, variantMap, getHref } = useRootProps();
  const { previousPage } = usePaginationContext();

  if (getHref) {
    return (
      <LinkButton
        variant={variantMap?.default}
        size={size}
        href={previousPage != null ? getHref(previousPage) : undefined}
      >
        <HiChevronLeft />
      </LinkButton>
    );
  }

  return (
    <IconButton
      as={ChakraPagination.PrevTrigger}
      variant={variantMap?.default}
      size={size}
      {...props}
    >
      <HiChevronLeft />
    </IconButton>
  );
};

export const PaginationNextTrigger = (props: PaginationPrevNextProps) => {
  const { size, variantMap, getHref } = useRootProps();
  const { nextPage } = usePaginationContext();

  if (getHref) {
    return (
      <LinkButton
        href={nextPage != null ? getHref(nextPage) : undefined}
        variant={variantMap?.default}
        size={size}
      >
        <HiChevronRight />
      </LinkButton>
    );
  }

  return (
    <IconButton
      as={ChakraPagination.NextTrigger}
      variant={variantMap?.default}
      size={size}
      {...props}
    >
      <HiChevronRight />
    </IconButton>
  );
};

export const PaginationItems = (props: BoxProps) => {
  return (
    <ChakraPagination.Context>
      {({ pages }: { pages: PageItem[] }) =>
        pages.map((page, index) => {
          return page.type === 'ellipsis' ? (
            <PaginationEllipsis key={index} {...props} />
          ) : (
            <PaginationItem key={index} value={page.value} {...props} />
          );
        })
      }
    </ChakraPagination.Context>
  );
};

export const PaginationPageText = forwardRef<
  HTMLDivElement,
  PaginationPageTextProps
>(function PaginationPageText(props, ref) {
  const { format = 'compact', ...rest } = props;
  const { page, pages, pageRange, count } = usePaginationContext();
  const content = useMemo(() => {
    if (format === 'short') return `${page} / ${pages.length}`;
    if (format === 'compact') return `${page} of ${pages.length}`;
    return `${pageRange.start + 1} - ${pageRange.end} of ${count}`;
  }, [format, page, pages.length, pageRange, count]);

  return (
    <Text fontWeight="medium" ref={ref} {...rest}>
      {content}
    </Text>
  );
});
