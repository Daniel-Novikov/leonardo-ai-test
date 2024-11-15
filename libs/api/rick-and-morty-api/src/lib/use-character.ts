import { useQuery, gql } from '@apollo/client';

import { CharacterData, CharacterVariables } from './types';

const GET_CHARACTER = gql`
  query GetCharacter($id: ID!) {
    character(id: $id) {
      id
      name
      status
      species
      type
      gender
      image
      origin {
        name
      }
      location {
        name
      }
      episode {
        name
        episode
      }
    }
  }
`;

export const useCharacter = (characterId: string) => {
  const { data, loading, error } = useQuery<CharacterData, CharacterVariables>(
    GET_CHARACTER,
    {
      variables: { id: characterId },
      skip: !characterId,
      fetchPolicy: 'cache-and-network',
    }
  );

  return {
    character: data?.character,
    loading,
    error,
  };
};
