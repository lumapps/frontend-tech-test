/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import PropTypes from 'prop-types';
import Card from '../Card';

function List({ characters }) {
  const quantity = 4;

  const charactersList = characters.slice(0, quantity).map((character) => (
	<Card key={character.id} picture={`${character.thumbnail.path}.${character.thumbnail.extension}`} name={character.name} description={character.description} comics={character.comics.available} series={character.series.available} stories={character.stories.available} />
  ));
  return (

	<div className="list">
		{charactersList}
	</div>
  );
}
List.propTypes = {
  characters: PropTypes.arrayOf(PropTypes.object).isRequired,
};
export default List;
