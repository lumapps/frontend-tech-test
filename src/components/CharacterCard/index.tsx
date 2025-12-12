import React from 'react';
import { Character, Reaction } from '../../types';
import { Chip, ChipGroup } from '@lumx/react';
import './index.scss';

interface CharacterCardProps {
  character: Character;
  reactions: Reaction[];
}

export const CharacterCard: React.FC<CharacterCardProps> = ({ character, reactions }) => {
  const characterReactions = reactions.filter(
    (reaction) => reaction.characterId === character.id && !reaction.deleted
  );

  // Group reactions by content and count them
  const groupedReactions = characterReactions.reduce((acc, reaction) => {
    const content = reaction.content;
    if (!acc[content]) {
      acc[content] = { content, count: 0 };
    }
    acc[content].count++;
    return acc;
  }, {} as Record<string, { content: string; count: number }>);

  const reactionGroups = Object.values(groupedReactions);

  return (
    <div className="character-card">
      <div className="character-card__image-container">
        {character.imageUrl ? (
          <img
            src={character.imageUrl}
            alt={character.name}
            className="character-card__image"
          />
        ) : (
          <div className="character-card__placeholder-image">No Image</div>
        )}
      </div>

      <div className="character-card__content">
        <div className="character-card__header">
          <h2 className="character-card__name">{character.name}</h2>
          <div className="character-card__badges">
            {character.species && (
              <Chip size="s" theme="light">
                {character.species.toUpperCase()}
              </Chip>
            )}
            {character.birthYear && (
              <Chip size="s" theme="light">
                {character.birthYear}
              </Chip>
            )}
          </div>
        </div>

        {character.description && (
          <p className="character-card__description">{character.description}</p>
        )}

        {character.affiliations && character.affiliations.length > 0 && (
          <ChipGroup className="character-card__affiliations">
            {character.affiliations.map((affiliation, index) => (
              <Chip key={index} size="s">
                {affiliation}
              </Chip>
            ))}
          </ChipGroup>
        )}

        {reactionGroups.length > 0 && (
          <div className="character-card__reactions">
            {reactionGroups.map((group) => (
              <span key={group.content} className="character-card__reaction">
                {group.content}
                <span className="character-card__reaction-count">{group.count}</span>
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
