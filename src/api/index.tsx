import { Character, Reaction } from '../types';

export interface CharactersResponse {
  results: Character[];
  total: number;
  page: number;
  limit: number;
  next: string | null;
  previous: string | null;
}

export interface ReactionsResponse {
  reactions: Reaction[];
}

export const fetchCharacters = async (
  searchName: string = '',
  page: number = 1,
  limit: number = 4
): Promise<CharactersResponse> => {
  const params = new URLSearchParams({
    page: page.toString(),
    limit: limit.toString(),
  });

  if (searchName) {
    params.append('name', searchName);
  }

  const response = await fetch(`/api/characters?${params.toString()}`);

  if (!response.ok) {
    throw new Error('Failed to fetch characters');
  }

  return response.json();
};

export const fetchReactions = async (): Promise<ReactionsResponse> => {
  const response = await fetch('/api/reactions');

  if (!response.ok) {
    throw new Error('Failed to fetch reactions');
  }

  return response.json();
};