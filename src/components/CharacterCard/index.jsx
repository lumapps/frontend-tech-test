import React from "react";

const CharacterCard = ({ character }) => {
  return (
    <div className="character-card">
      <div className="character-card__image-container">
        <img
          alt={`${character.name}'s thumbnail`}
          src={character.thumbnail.path + "." + character.thumbnail.extension}
        />
      </div>
      <div className="character-card__text-section">
        <h2>{character.name}</h2>
        <p>
          {character.description ||
            "This character description has yet to come !"}
        </p>
        <div className="character-card__text-section--numbers-section">
          <p>#comics: {character.comics.available}</p>
          <p>#series: {character.series.available}</p>
          <p>#stories: {character.stories.available}</p>
        </div>
      </div>
    </div>
  );
};

export default CharacterCard;

