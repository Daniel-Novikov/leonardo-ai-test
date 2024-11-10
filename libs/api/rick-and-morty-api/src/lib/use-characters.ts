import { useQuery, gql } from '@apollo/client';
import { useRouter, useSearchParams } from 'next/navigation';
import { useCallback } from 'react';

import { CharactersData, CharactersVars } from './types';

const GET_CHARACTERS = gql`
  query GetCharacters($page: Int) {
    characters(page: $page) {
      info {
        count
        pages
        next
        prev
      }
      results {
        id
        name
        image
        species
        status
      }
    }
  }
`;

export function useCharacters() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const page = parseInt(searchParams.get('page') || '1', 10);

  const { loading, error, data, previousData, refetch } = useQuery<
    CharactersData,
    CharactersVars
  >(GET_CHARACTERS, {
    variables: { page },
    fetchPolicy: 'cache-and-network',
    notifyOnNetworkStatusChange: true,
  });

  const goToPage = useCallback(
    (newPage: number) => {
      router.push(`?page=${newPage}`);
      refetch({ page: newPage });
    },
    [router, refetch]
  );

  const persistentData = loading ? previousData : data;

  return {
    loading,
    error,
    characters: persistentData?.characters.results,
    pageInfo: persistentData?.characters.info,
    page,
    pageSize: 20,
    goToPage,
  };
}
