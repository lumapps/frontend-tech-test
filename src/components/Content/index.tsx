import React, { useState, useEffect } from 'react';
import { Character, Reaction } from '../../types';
import { fetchCharacters, fetchReactions } from '../../api';
import { CharacterCard } from '../CharacterCard';
import { Pagination } from '../Pagination';
import './index.scss';

interface ContentProps {
  searchQuery: string;
  triggerSearch: number;
}

export const Content: React.FC<ContentProps> = ({ searchQuery, triggerSearch }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [characters, setCharacters] = useState<Character[]>([]);
  const [reactions, setReactions] = useState<Reaction[]>([]);
  const [totalPages, setTotalPages] = useState(0);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [hasSearched, setHasSearched] = useState(false);

  useEffect(() => {
    void loadReactions();
  }, []);

  useEffect(() => {
    if (triggerSearch > 0) {
      setCurrentPage(1);
      void loadCharacters(searchQuery, 1);
    }
  }, [triggerSearch]);

  const loadReactions = async () => {
    try {
      const data = await fetchReactions();
      setReactions(data.reactions);
    } catch (err) {
      console.error('Failed to load reactions:', err);
    }
  };

  const loadCharacters = async (query: string, page: number) => {
    setLoading(true);
    setError(null);

    try {
      const data = await fetchCharacters(query, page, 4);
      setCharacters(data.results);
      setTotalPages(Math.ceil(data.total / data.limit));
      setHasSearched(true);
    } catch (err) {
      setError('Failed to load characters. Please try again.');
      console.error('Failed to load characters:', err);
    } finally {
      setLoading(false);
    }
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    void loadCharacters(searchQuery, page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section className="content">
      {loading && (
        <div className="content__message">Loading characters...</div>
      )}

      {error && (
        <div className="content__error">{error}</div>
      )}

      {!loading && !error && hasSearched && characters.length === 0 && (
        <div className="content__message">
          No characters found. Try a different search term.
        </div>
      )}

      {!loading && !error && characters.length > 0 && (
        <>
          <div className="content__results">
            {characters.map((character) => (
              <CharacterCard
                key={character.id}
                character={character}
                reactions={reactions}
              />
            ))}
          </div>

          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={handlePageChange}
          />
        </>
      )}

      {!hasSearched && (
        <div className="content__message">
          Start searching to discover Star Wars characters!
        </div>
      )}
    </section>
  );
};
