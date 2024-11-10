export type Character = {
  id: string;
  name: string;
  image: string;
  species: string;
  status: string;
};

export type PageInfo = {
  count: number;
  pages: number;
  next: number | null;
  prev: number | null;
};

export type CharactersData = {
  characters: {
    info: PageInfo;
    results: Character[];
  };
};

export type CharactersVars = {
  page: number;
};

export type CharacterDetails = {
  id: string;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  image: string;
  origin: { name: string };
  location: { name: string };
  episode: Array<{ name: string; episode: string }>;
};

export type CharacterData = {
  character: CharacterDetails;
};

export type CharacterVariables = {
  id: string;
};
