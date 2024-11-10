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
